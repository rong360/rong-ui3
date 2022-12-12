import * as LZUTF8 from 'lzutf8';

export function compressText(str: string) {
  return LZUTF8.compress(str, { outputEncoding: 'Base64' });
}

export function decompressText(str: string) {
  return LZUTF8.decompress(str, { inputEncoding: 'Base64' });
}
