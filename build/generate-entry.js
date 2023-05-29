const pkg = require('../package.json');
const fse = require('fs-extra');
const path = require('path');
const glob = require('glob')
const componentInfo = require('./getComponentInfo');

let importStr = ``;
let exportStr = ``;
let importStrEs = ``;
let exportStrEs = ``;
let importLessStr = ``;
let globalComponentsStr = ``
let components = [];

componentInfo.forEach(component => {
  let { name, folder } = component
  importStr += `import ${name} from './${folder}/index.vue';\n`;
  importStrEs += `import ${name} from './es/${folder}/index.mjs';\n`;
  exportStr += `export * from './${folder}/index.vue';\n`;
  exportStrEs += `export * from './es/${folder}/index.mjs';\n`;
  importLessStr += `import './${folder}/style/index.less';\n`;
  globalComponentsStr += `R${name}: typeof ${name};\n`
  components.push(name);
})

let installFunction = `const install = (app) => {
  const components = [${components.join(', ')}];
  components.forEach((component) => {
    app.use(component);
  });
};`;

let installFunctionTs = `const install = (app: App): void => {
  const components = [${components.join(', ')}];
  components.forEach((component) => {
    app.use(component);
  });
};`;

let globalComponentInterface = `declare module '@vue/runtime-core' {
  interface GlobalComponents {
    ${globalComponentsStr}
  }
}`

// src/packages入口
let fileStrDev = `
import type { App } from 'vue';\n
${importStr}
${exportStr}
${installFunctionTs}
${globalComponentInterface}
const version = '${pkg.version}';\n
export { install, version, ${components.join(', ')} };
export default { install, version };
`;
fse.outputFile(path.resolve(__dirname, '../src/packages/index.ts'), fileStrDev, err => {
  if (err) return console.error(err)
  console.log('/src/packages/index.ts')
});


// release包es入口
let fileStrEs = `${importStrEs}
${exportStrEs}
${installFunction}
const version = '${pkg.version}';\n
export { install, version, ${components.join(', ')} };
export default { install, version };
`;
fse.outputFile(path.resolve(__dirname, '../release/rong-ui3.es.js'), fileStrEs, err => {
  if (err) return console.error(err)
  console.log('/release/rong-ui3.es.js')
});
