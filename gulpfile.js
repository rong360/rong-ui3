const gulp = require('gulp');
const less = require('gulp-less');
const through2 = require('through2');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
var lessBaseImport = require('gulp-less-base-import');

// copyLess && add index.js  css.js entry
gulp.task('copyLess', function () {
  return gulp
    .src('./packages/*/style/*.less')
    .pipe(
      through2.obj(function z(file, encoding, next) {
        if (file.path.match(/(\/|\\)style(\/|\\)index\.less/)) {
          // add index.js 用于加载.less文件
          let indexJs = file.clone();
          indexJs.contents = Buffer.from(`import './index.less';\n`);
          indexJs.path = indexJs.path.replace(/index\.less/, 'index.js');
          this.push(indexJs);

          // add css.js 用于加载.css文件
          let cssJs = file.clone();
          cssJs.contents = Buffer.from(`import './index.css';\n`);
          cssJs.path = cssJs.path.replace(/index\.less/, 'css.js');
          this.push(cssJs);

          // add global less && component depends on less
          let fileContens = `@import '../../styles/variables.less';\n${file.contents.toString()}`;
          fileContens = fileContens.replace(/\/\/::\s*/, '');
          file.contents = Buffer.from(fileContens);
        }
        this.push(file);
        next();
      })
    )
    .pipe(gulp.dest('./release/es'));
});

gulp.task('copyStyles', function () {
  return gulp.src('./packages/styles/**/*.less').pipe(gulp.dest('./release/es/styles'));
});

// index.less -> index.css
gulp.task('less2css', function () {
  return (
    gulp
      .src('./release/**/style/index.less')
      // .pipe(lessBaseImport('./packages/styles/variables.less'))
      .pipe(less()) // 处理less文件
      .pipe(autoprefixer()) // 根据browserslistrc增加前缀
      .pipe(cleanCSS({ format: 'keep-breaks', compatibility: 'ie8' }))
      .pipe(gulp.dest('./release'))
  );
});

const buildStyles = gulp.series('copyLess', 'copyStyles', 'less2css');

exports.buildStyles = buildStyles;
