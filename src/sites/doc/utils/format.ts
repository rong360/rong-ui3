export const camelize = (str: string): string => str.replace(/-(\w)/g, (_, c) => c.toUpperCase());
export const kebabCase = (str: string): string =>
  str
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');
