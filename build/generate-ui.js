const pkg = require('../package.json');
const fse = require('fs-extra');
const path = require('path');
const glob = require('glob')
const componentInfo = require('./getComponentInfo');

let importStr = `import type { App } from 'vue';\n`;
let exportStr = ``;
let importLessStr = ``;
let globalComponentsStr = ``
let components = [];

componentInfo.forEach(component => {
  let { name, folder } = component
  importStr += `import ${name} from './${folder}/index.vue';\n`;
  exportStr += `export * from './${folder}/index.vue';\n`;
  importLessStr += `import './${folder}/style/index.less';\n`;
  globalComponentsStr += `R${name}: typeof ${name};\n`
  components.push(name);
})

let installFunction = `const install = (app: App): void => {
  const components = [${components.join(', ')}];
  components.forEach((component) => {
    app.use(component);
  });
};`;

let globalComponentInterface = `declare module 'vue' {
  interface GlobalComponents {
    ${globalComponentsStr}
  }
}`

// let fileStrBuild = `${importStr}
// ${exportStr}
// ${installFunction}\n
// const version = '${pkg.version}';\n
// export { install, version, ${components.join(', ')} };
// export default { install, version };
// `;
// fse.outputFile(path.resolve(__dirname, '../packages/index.build.ts'), fileStrBuild, err => {
//   if (err) return console.error(err)
//   console.log('/packages/index.build.ts')
// });

let fileStrDev = `${importStr}
${importLessStr}
${exportStr}
${installFunction}
${globalComponentInterface}
const version = '${pkg.version}';\n
export { install, version, ${components.join(', ')} };
export default { install, version };
`;
fse.outputFile(path.resolve(__dirname, '../packages/index.ts'), fileStrDev, err => {
  if (err) return console.error(err)
  console.log('/packages/index.ts')
});

/**
 import type { App } from "vue";
import FlexFixed from "./flex-fixed";
import Dialog from "./dialog";
import Overlay from "./overlay";
import Popup from "./popup";

export const components = [FlexFixed, Dialog, Overlay, Popup];

const install = (app: App): void => {
  components.forEach((component) => {
    app.use(component);
  });
};

// export { FlexFixed, Dialog };

export default {
  install,
};

export * from "./dialog";
export * from "./flex-fixed";
export * from "./overlay";
export * from "./popup";

 */
