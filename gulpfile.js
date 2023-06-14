const gulp = require('gulp');
const less = require('gulp-less');
const through2 = require('through2');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');

var lessBaseImport = require('gulp-less-base-import');

// copyLess && add index.js  css.js entry
gulp.task('copyLess', function () {
  return gulp
    .src('./src/packages/*/style/*.less')
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
          let fileContens = `@import '../../styles/variables.less';\n@import '../../styles/base.less';\n${file.contents.toString()}`;
          fileContens = fileContens.replace(/\/\/::\s*/g, '');
          file.contents = Buffer.from(fileContens);
        }
        this.push(file);
        next();
      })
    )
    .pipe(gulp.dest('./release/es'));
});

gulp.task('copyStyles', function () {
  return gulp.src('./src/packages/styles/**/*.less').pipe(gulp.dest('./release/es/styles'));
});

function compileLess(src, baseImports = []) {
  let stream = gulp.src(src);
  baseImports.forEach((item) => {
    stream = stream.pipe(item);
  });
  return stream
  .pipe(less()) // 处理less文件
  .pipe(postcss()) // automatically from postcss.config.js, so you don't have to specify any options.
  .pipe(cleanCSS({ format: 'keep-breaks', compatibility: 'ie8' }))
}

// disperse index.less -> index.css
gulp.task('less2css', function () {
  return compileLess('./release/**/style/index.less').pipe(gulp.dest('./release'));
});

// entry index.less -> style.css
gulp.task('less2css_entry', function () {
  return compileLess('./src/packages/index.less', [lessBaseImport('./src/packages/styles/variables.less'), lessBaseImport('./src/packages/styles/base.less')]).pipe(rename('style.css')).pipe(gulp.dest('./release'));
});

const buildStyles = gulp.series('copyLess', 'copyStyles', 'less2css', 'less2css_entry');

exports.buildStyles = buildStyles;
