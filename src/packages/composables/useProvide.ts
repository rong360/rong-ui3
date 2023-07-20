import { provide, reactive, getCurrentInstance } from 'vue';
import type { InjectionKey, ComponentInternalInstance } from 'vue';

export function useProvide<T>(key: string | InjectionKey<T>, options?: Record<string, any>) {
  const children: ComponentInternalInstance[] = reactive([]);

  const add = (child: ComponentInternalInstance) => children.push(child);

  const remove = (child: ComponentInternalInstance) => {
    const index = children.indexOf(child);
    if (index !== -1) children.splice(index, 1);
  };

  const instance = getCurrentInstance()!;

  provide(key, Object.assign({ children, add, remove, instance }, options) as T);

  return {
    children
  };
}
