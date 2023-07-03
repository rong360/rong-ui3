// 对象合并，过滤掉undefined
export function objectAssign(target: Record<string, any>, ...sources: Record<string, any>[]) {
  const to = Object(target);
  sources.forEach((source) => {
    source &&
      Object.keys(source).forEach((key) => {
        if (typeof source[key] != 'undefined') {
          to[key] = source[key];
        }
      });
  });
  return to;
}

export function isPromise(value: any) {
  return value && typeof value.then === 'function';
}

export function pick(obj: Record<string, any>, keys: string[], ignoreUndefined?: boolean) {
  return keys.reduce((ret, key) => {
    if ((!ignoreUndefined || obj[key] !== undefined) && key in obj) {
      ret[key] = obj[key];
    }
    return ret;
  }, {} as Record<string, any>);
}

export const isSameValue = (newValue: unknown, oldValue: unknown) =>
  JSON.stringify(newValue) === JSON.stringify(oldValue);
