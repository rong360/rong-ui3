const gulp = require('gulp');
const less = require('gulp-less');
const through2 = require('through2');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
var lessBaseImport = require('gulp-less-base-import');

// index.less -> index.css
function less2css(done) {
  gulp
    .src('./packages/**/style/index.less')
    .pipe(lessBaseImport('./packages/styles/var.less'))
    .pipe(less()) // 处理less文件
    .pipe(autoprefixer()) // 根据browserslistrc增加前缀
    .pipe(cleanCSS({ format: 'keep-breaks', compatibility: 'ie8' }))
    .pipe(gulp.dest('./dist/es'));
  done();
}

// copyLess && add index.js css.js entry
function copyLess(done) {
  gulp
    .src('./packages/*/style/*.less')
    .pipe(
      through2.obj(function z(file, encoding, next) {
        let indexJs = file.clone();
        let cssJs = file.clone();
        if (file.path.match(/(\/|\\)style(\/|\\)index\.less/)) {
          // add index.js 用于加载.less文件
          indexJs.contents = Buffer.from(`import './index.less';\n`);
          indexJs.path = indexJs.path.replace(/index\.less/, 'index.js');
          this.push(indexJs);

          // add css.js 用于加载.css文件
          cssJs.contents = Buffer.from(`"use strict";\nrequire("./index.css");\n`);
          cssJs.path = cssJs.path.replace(/index\.less/, 'css.js');
          this.push(cssJs);

          // add global less && component depends on less
          let fileContens = `@import '../../styles/var.less';\n${file.contents.toString()}`;
          fileContens = fileContens.replace(/\/\/::\s*/, '');
          file.contents = Buffer.from(fileContens);
        }
        this.push(file);
        next();
      })
    )
    .pipe(gulp.dest('./dist/es'));
  done();
}

function copyStyles(done) {
  gulp.src('./packages/styles/**/*.less').pipe(gulp.dest('./dist/es/styles'));
  done();
}

const buildStyles = gulp.series(copyLess, copyStyles, less2css);

exports.buildStyles = buildStyles;
