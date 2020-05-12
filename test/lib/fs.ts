import fs, { promises as fsp } from 'fs';
import path from 'path';

import pRimraf from './p-rimraf';

const lastExistingPath = (testedPath: string) => {
  let currPath = testedPath;
  while (!fs.existsSync(currPath)) {
    currPath = path.dirname(currPath);
  }
  return currPath;
};

const isPathDescendant = (
  childPath: string,
  parentPath: string = process.cwd(),
  { allowSelf = false } = {},
) => {
  const relPath = path.relative(parentPath, childPath);
  return Boolean((relPath || allowSelf) && !relPath.startsWith('..'));
};

const getTempDirRoot = (tempPath: string) => {
  const existingPath = lastExistingPath(tempPath);
  const tempDirRoot = path.relative(existingPath, tempPath).split(path.sep)[0];
  const root = path.resolve(existingPath, tempDirRoot);
  return root;
};

const validateDelPath = (delPath: string, allowedPath = 'temp') => {
  const fullAllowedPath = path.resolve(process.cwd(), allowedPath);
  if (!isPathDescendant(delPath, fullAllowedPath, { allowSelf: true })) {
    throw Error('Path for deletion must be inside the "./temp" directory.');
  }
};

const validateAndRemove = async (p: string) => {
  if (!p) return;
  validateDelPath(p);
  return pRimraf(p);
};

/**
 * Create subdirs
 */
export const prepare = async (destDir = 'temp/test') => {
  // Remember what paths were created
  const createdDirRoot = getTempDirRoot(destDir);
  await fsp.mkdir(destDir, { recursive: true });

  return {
    tempDirRoot: createdDirRoot,
  };
};

/**
 * Reset the files to the starting state, so other test can begin
 */
export const reset = async (destDir = 'temp/test') => {
  return validateAndRemove(destDir);
};

/**
 * Restore the system to the initial state, as it was before tests
 */
export const restore = async (tempDirRoot: string) => {
  return validateAndRemove(tempDirRoot);
};
