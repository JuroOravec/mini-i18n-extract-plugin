/**
 * Jest's setup like beforeAll is run even when the describe block
 * that it is run in is marked  with `skip`.
 *
 * This dummy function is meant as a replacement for the describe.skip
 * so the block does actually skip
 *
 * See https://github.com/facebook/jest/issues/8379
 */
const describeSkip = (desc: string, ...args: any[]) => {
  /**
   * If we want to skip large blocks (e.g. entire file), we need at least
   * some dummy test so Jest doesn't complain
   * https://github.com/facebook/jest/issues/8379#issuecomment-562332756
   */
  describe('skipped describe blocks', () => {
    test.skip(`describe block "${desc}"`, () => {
      /** noop */
    });
  });
};

// @ts-ignore
global.describeSkip = describeSkip;
