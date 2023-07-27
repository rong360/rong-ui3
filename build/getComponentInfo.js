// const glob = require('glob')

// const camelize = (str) => str.replace(/-(\w)/g, (_, c) => c.toUpperCase());

// let componentInfo = [];
// let componentDemos = glob.sync('./packages/*/demo/index.vue');

// componentDemos.forEach(demoPath => {
//   let folder = demoPath.match(/\/packages\/(.*)\/demo\/index.vue/)[1]
//   let name = camelize(`-${folder}`)

//   componentInfo.push({
//     name,
//     folder,
//     path: demoPath.replace('demo/index.vue', 'index.ts')
//   });
// })

const path = require('path');
const config = require('../src/config.json')
const componentInfo = [];
const kebabCase = (str) => str.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');

config.component.forEach(category => {
  category.packages.forEach(component => {
    const folder = kebabCase(component.name)
    componentInfo.push({
      name: component.name,
      folder,
      path: path.resolve(__dirname, `../src/packages/${folder}/index.vue`)
    })
  })
})

module.exports = componentInfo