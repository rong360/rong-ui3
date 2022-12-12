const gulp = require('gulp');
const less = require('gulp-less');
const through2 = require('through2');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

// index.less -> index.css
function less2css(done) {
  gulp
    .src('./packages/components/*/style/index.less')
    .pipe(less()) // 处理less文件
    .pipe(autoprefixer()) // 根据browserslistrc增加前缀
    .pipe(cleanCSS({ format: 'keep-breaks', compatibility: 'ie8' }))
    .pipe(gulp.dest('./packages/components'));
  done();
}

// copyLess && add index.js css.js entry
function copyLess(done) {
  gulp
    .src('./packages/components/**/*.less')
    .pipe(
      through2.obj(function z(file, encoding, next) {
        let indexJs = file.clone();
        let cssJs = file.clone();
        this.push(file.clone());
        if (file.path.match(/(\/|\\)style(\/|\\)index\.less/)) {
          // add index.js 用于加载.less文件
          indexJs.contents = Buffer.from(`import './index.less';\n`);
          indexJs.path = indexJs.path.replace(/index\.less/, 'index.js');
          this.push(indexJs);

          // add css.js 用于加载.css文件
          cssJs.contents = Buffer.from(`"use strict";\nrequire("./index.css");\n`);
          cssJs.path = cssJs.path.replace(/index\.less/, 'css.js');
          this.push(cssJs);
          next();
        } else {
          next();
        }
      })
    )
    .pipe(gulp.dest('./dist/es'));
  done();
}

function copyLess(done) {
  gulp
    .src('./packages/components/**/*.less')
    .pipe(
      through2.obj(function z(file, encoding, next) {
        let indexJs = file.clone();
        let cssJs = file.clone();
        this.push(file.clone());
        if (file.path.match(/(\/|\\)style(\/|\\)index\.less/)) {
          // add index.js 用于加载.less文件
          indexJs.contents = Buffer.from(`import './index.less';\n`);
          indexJs.path = indexJs.path.replace(/index\.less/, 'index.js');
          this.push(indexJs);

          // add css.js 用于加载.css文件
          cssJs.contents = Buffer.from(`"use strict";\nrequire("./index.css");\n`);
          cssJs.path = cssJs.path.replace(/index\.less/, 'css.js');
          this.push(cssJs);
          next();
        } else {
          next();
        }
      })
    )
    .pipe(gulp.dest('./dist/es'));
  done();
}

const buildStyles = gulp.series(copyLess, less2css);

exports.buildStyles = buildStyles;
