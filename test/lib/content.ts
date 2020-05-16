import { promises as fsp } from 'fs';

/**
 * Normalize file content by reducing whitespace sequences to single space,
 * so the contents can be compared
 */
export function normalize(content: string) {
  return content.replace(/\s+/gu, ' ');
}

/**
 * Get content from a file. Read and normalize
 */
export async function get(path: string, shouldNormalize = true) {
  const content = await fsp.readFile(path, 'utf-8');
  return shouldNormalize ? normalize(content) : content;
}

/**
 * Compare normalized contents of two files.
 */
export async function compare(
  path1: string,
  path2: string,
  normalize = true,
) {
  const [content1, content2] = await Promise.all(
    [path1, path2].map((p) => get(p, normalize)),
  );
  return content1 === content2;
}

/**
 * Compare normalized contents of two files using custom function
 */
export async function compareWith(
  fn: (a: any, b: any) => boolean | void,
  path1: string,
  path2: string,
  normalize = true,
) {
  const [content1, content2] = await Promise.all(
    [path1, path2].map((p) => get(p, normalize)),
  );
  return fn(content1, content2);
}
