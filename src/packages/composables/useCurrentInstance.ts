import { getCurrentInstance } from 'vue';
import type { ComponentInternalInstance } from 'vue';

export function useCurrentInstance() {
  const { appContext, proxy } = getCurrentInstance() as ComponentInternalInstance;
  const globalProperties = appContext.config.globalProperties;

  return {
    globalProperties,
    appContext,
    proxy,
    $router: (proxy as any).$router
  };
}
