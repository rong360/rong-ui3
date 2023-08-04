//postcss.config.js
module.exports = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: ['> 0.5%', 'last 2 versions', 'ie > 11', 'iOS >= 10', 'Android >= 5'],
      grid: true
    }),
    require('postcss-flexbugs-fixes'),
    // process.env.NODE_ENV != 'gulp' ? require('postcss-plugin-px2rem')({
    //   // base on 320px standard.
    //   rootValue: 18.75,
    //   // to leave 1px alone.
    //   minPixelValue: 1.01,
    //   selectorBlackList: ['.r-doc', '.markdown-body'],
    //   exclude: ['/doc/']
    // }) : null
    process.env.NODE_ENV != 'gulp' ? require('postcss-pxtorem')({
      rootValue({ file }) {
        return file.indexOf('rong-ui3') !== -1 ? 37.5 : 75;
      },
      propList: ['*'],
      minPixelValue: 0,
      selectorBlackList: ['.r-doc', '.markdown-body'],
      exclude: ['/doc/']
    }) : null
  ]
  // plugins: {
  //   autoprefixer: {
  //     overrideBrowserslist: [
  //       'Android 4.1',
  //       'iOS 7.1',
  //       'Chrome > 31',
  //       'ff > 31',
  //       'ie >= 8',
  //       'last 10 versions' // 所有主流浏览器最近10版本用
  //     ],
  //     grid: true
  //   }
  // }
};
