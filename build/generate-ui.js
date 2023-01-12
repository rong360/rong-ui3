const pkg = require('../package.json');
const fse = require('fs-extra');
const path = require('path');
const glob = require('glob')
const componentInfo = require('./getComponentInfo')

const camelize = (str) => str.replace(/-(\w)/g, (_, c) => c.toUpperCase());

let importStr = `import type { App } from 'vue';\n`;
let exportStr = ``;
let importLessStr = ``;
let components = [];

componentInfo.forEach(component => {
  importStr += `import ${component.name} from './${component.folder}';\n`;
  exportStr += `export * from './${component.folder}';\n`;
  importLessStr += `import './${component.folder}/style/index.less';\n`;
  components.push(component.name);
})

let installFunction = `const install = (app: App): void => {
  const components = [${components.join(', ')}];
  components.forEach((component) => {
    app.use(component);
  });
};`;

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
${installFunction}\n
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
