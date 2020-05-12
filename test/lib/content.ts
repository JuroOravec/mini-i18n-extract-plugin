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
export async function get(path: string) {
  const content = await fsp.readFile(path, 'utf-8');
  return normalize(content);
}

/**
 * Compare normalized contents of two files.
 */
export async function compare(path1: string, path2: string) {
  const [content1, content2] = await Promise.all([path1, path2].map(get));
  return content1 === content2;
}
