import type { ComponentResolver } from 'unplugin-vue-components/types';

interface RongUIResolverOptions {
  // import css or less,  default true
  importStyle?: boolean | 'css' | 'less';
  from?: string;
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
          from: from || `rong-ui3`
        };
      }
    }
  };
}
