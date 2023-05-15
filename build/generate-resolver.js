const fse = require('fs-extra');
const path = require('path');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

// 生成resolver/package.json
const resolverPackageJson = `{
  "name": "rongui-vue-resolver",
  "description": "RongUIResolver for unplugin-vue-components",
  "exports": {
    ".": {
      "types": "./index.d.ts",
      "require": "./index.js",
      "import": "./index.mjs"
    },
    "./index": {
      "types": "./index.d.ts",
      "require": "./index.js",
      "import": "./index.mjs"
    },
    "./*": "./*"
  },
  "main": "index.js",
  "module": "index.mjs",
  "types": "index.d.ts"
}`
fse.outputFileSync(resolve('release/resolver/package.json'), resolverPackageJson)