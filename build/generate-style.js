const glob = require('glob')
const fse = require('fs-extra');
const path = require('path')

// let styles = glob.sync('./packages/**/*.less');

// styles.forEach(stylePath => {
//   let destPath = stylePath.replace(/packages\/components/, 'dist/es')
//   fse.copy(stylePath, destPath, err => {
//     if (err) return console.error(err)
//     console.log(`copy ${stylePath} -> ${destPath} success!`)
//   })
// })

  // fse.copy(path.resolve(__dirname, '../packages/components'), destPath, err => {
  //   if (err) return console.error(err)
  //   console.log(`copy ${stylePath} -> ${destPath} success!`)
  // })

  const filterFunc = (src, dest) => {
    let stat = fse.lstatSync(src)

    if (/index.less$/.test(dest)) {
      fse.outputFileSync(dest.replace("index.less", "index.js"), `import './index.less';\n`, 'utf8');
      fse.outputFileSync(dest.replace("index.less", "css.js"), `"use strict";\nrequire("./index.css");\n`, 'utf8');
    }

    if (stat.isDirectory()) {
      return true
    } else {
      return /\.(less)$/.test(src)
    }
  }

  fse.copy(path.resolve(__dirname, '../packages/components'), path.resolve(__dirname, '../dist/es'), { filter: filterFunc }, err => {
    if (err) return console.error(err)
  })

fse.copy(path.resolve(__dirname, '../packages/styles'), path.resolve(__dirname, '../dist/styles'))