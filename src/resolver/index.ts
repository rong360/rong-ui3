import type { ComponentResolver, ComponentResolveResult } from 'unplugin-vue-components/types';
import { kebabCase } from '../packages/utils/';

export interface RongUIResolverOptions {
  // import css or less,  default true
  importStyle?: boolean | 'css' | 'less';
  // import component from, default 'rong-ui3'
  from?: string;
  sideEffects?: (dirName: string) => string;
}

function getResolveResult(name: string, componentName: string, options: RongUIResolverOptions): ComponentResolveResult {
  const { importStyle = true, sideEffects } = options;
  const dirName = kebabCase(componentName);

  if (!options.from) options.from = 'rong-ui3';

  const style = sideEffects
    ? sideEffects(dirName)
    : `rong-ui3/es/${dirName}/style/${importStyle === 'less' ? 'index' : 'css'}.js`;

  return {
    name,
    from: options.from,
    sideEffects: importStyle ? style : undefined
  };
}

const RFunctions = [
  { name: 'showDialog', componentName: 'Dialog' },
  { name: 'showCustomDialog', componentName: 'Dialog' },
  { name: 'showToast', componentName: 'Toast' },
  { name: 'showLoadingToast', componentName: 'Toast' },
  { name: 'showSuccessToast', componentName: 'Toast' },
  { name: 'showFailToast', componentName: 'Toast' },
  { name: 'showLongToast', componentName: 'Toast' },
  { name: 'setToastDefaultOptions', componentName: 'Toast' }
];

export function RongUIResolver(options: RongUIResolverOptions = {}): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (/R[A-Z][a-z]+/.test(name)) return getResolveResult(name.slice(1), name.slice(1), options);

      for (let i = 0; i < RFunctions.length; i++) {
        const functionComponent = RFunctions[i];
        if (functionComponent.name === name) {
          return getResolveResult(functionComponent.name, functionComponent.componentName, options);
        }
      }
    }
  };
}
