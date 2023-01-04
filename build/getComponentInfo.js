const glob = require('glob')

const camelize = (str) => str.replace(/-(\w)/g, (_, c) => c.toUpperCase());

let componentInfo = [];
let componentDemos = glob.sync('./packages/*/demo/index.vue');

componentDemos.forEach(demoPath => {
  let folder = demoPath.match(/\/packages\/(.*)\/demo\/index.vue/)[1]
  let name = camelize(`-${folder}`)

  componentInfo.push({
    name,
    folder,
    path: demoPath.replace('demo/index.vue', 'index.ts')
  });
})

module.exports = componentInfo