const glob = require('glob')

const camelize = (str) => str.replace(/-(\w)/g, (_, c) => c.toUpperCase());

let componentInfo = [];
let components = glob.sync('./packages/components/*/index.ts');

components.forEach(componentPath => {
  let folder = componentPath.match(/\/packages\/components\/(.*)\/index.ts/)[1]
  let name = camelize(`-${folder}`)

  componentInfo.push({
    name,
    folder,
    path: componentPath
  });
})

module.exports = componentInfo