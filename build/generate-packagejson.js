const fse = require('fs-extra');
const path = require('path');
const pkg = require('../package.json');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const pkgStr = `{
  "name": "rong-ui3",
  "version": "${pkg.version}",
  "description": "A Vue.js 3.0 UI Toolkit for Web.",
  "author": "rong-ui3",
  "keywords": [
      "rong-ui3"
  ],
  "bugs": {
      "url": "https://github.com/rong360/rong-ui3/issues"
  },
  "homepage": "https://github.com/rong360/rong-ui3",
  "repository": {
      "type": "git",
      "url": "git+https://github.com/rong360/rong-ui3.git"
  },
  "main": "rong-ui3.umd.js",
  "module": "rong-ui3.es.js",
  "typings": "types/index.d.ts",
  "style": "style.css",
  "sideEffects": [
    "es/**/style/*",
    "*.css"
  ],
  "dependencies": {},
  "contributors": [
    {
      "name": "List of Acorn contributors. Updated before every release."
    },{
      "name": "zyx"
    }
  ],
  "license": "MIT"
}`

fse.outputFileSync(resolve('release/package.json'), pkgStr)

fse.copyFileSync(resolve('README.md'), resolve('release/README.md'))