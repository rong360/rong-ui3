import type { ComponentResolver, SideEffectsInfo } from 'unplugin-vue-components/types';
import { kebabCase } from '../packages/utils/';

interface RongUIResolverOptions {
  // import css or less,  default true
  importStyle?: boolean | 'css' | 'less';
  // import component from, default 'rong-ui3'
  from?: string;
}

function getSideEffects(dirName: string, options: RongUIResolverOptions): SideEffectsInfo | undefined {
  const { importStyle = true } = options;

  if (!importStyle) return;

  if (importStyle === 'less') return `rong-ui3/es/${dirName}/style/index.js`;

  return `rong-ui3/es/${dirName}/style/css.js`;
}

export function RongUIResolver(options: RongUIResolverOptions = {}): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      const { from } = options;
      if (/R[A-Z][a-z]+/.test(name)) {
        const componentName = name.slice(1);
        return {
          name: componentName,
          from: from || `rong-ui3`,
          sideEffects: getSideEffects(kebabCase(componentName), options)
        };
      }
    }
  };
}
