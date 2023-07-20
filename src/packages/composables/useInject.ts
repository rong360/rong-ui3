import { ref, inject, computed, onUnmounted, getCurrentInstance } from 'vue';
import type { InjectionKey, ComponentInternalInstance } from 'vue';

type ParentProvide<T> = T & {
  add(child: ComponentInternalInstance): void;
  remove(child: ComponentInternalInstance): void;
  children: ComponentInternalInstance[];
  instance: ComponentInternalInstance;
  [key: string]: any;
};

export function useInject<T>(key: string | InjectionKey<ParentProvide<T>>) {
  const parent = inject(key, null);

  if (parent) {
    const instance = getCurrentInstance()!;
    const { add, remove, children } = parent;

    add(instance);
    onUnmounted(() => remove(instance));

    const index = computed(() => children.indexOf(instance));

    return {
      parent,
      index
    };
  }

  return {
    parent: null,
    index: ref(-1)
  };
}
