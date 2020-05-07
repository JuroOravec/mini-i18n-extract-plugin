/**
 * Fixes the issue where the errors in hooks are not displayed
 * See https://github.com/facebook/jest/issues/5192
 */

const testHookFns = ['beforeEach', 'afterEach', 'beforeAll', 'afterAll'];

const originalHooks: { [key: string]: Function } = {};

for (const testHook of testHookFns) {
  // @ts-ignore
  const origHook = (global[testHook] as any) as Function;
  originalHooks[testHook] = origHook;

  const wrappedTestHookFn = (fn: Function) => {
    origHook(async () => {
      try {
        await fn();
      } catch (e) {
        console.error(e);
        throw e;
      }
    });
  };
  // @ts-ignore
  global[testHook] = wrappedTestHookFn;
}
