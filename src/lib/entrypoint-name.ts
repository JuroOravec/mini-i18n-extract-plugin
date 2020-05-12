import type { types } from 'mini-extract-plugin';

/**
 * Find Chunk's entrypoint name
 */
export default function entrypointName(
  chunk: types.webpack.Chunk,
): string | undefined {
  for (const group of chunk.groupsIterable) {
    if (group.constructor.name === 'Entrypoint') return group.name;
  }
}
