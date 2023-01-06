const pkg = require('../package.json');
const fse = require('fs-extra');
const path = require('path');
const componentInfo = require('./getComponentInfo')

let importStr = `import type { App } from 'vue';\n`;
let components = [];

componentInfo.forEach(component => {
  importStr += `import ${component.name} from './${component.folder}';\n`;
  components.push(component.name);
})

fse.outputFileSync(path.resolve(__dirname, '../release/types/index.d.ts'),
  `${importStr}
export { ${components.join(', ')} };

declare namespace _default {
  export { install };
  export { version };
}
export function install(app: App): void;
export const version: '${pkg.version}';
export default _default;
`,
'utf8'
);