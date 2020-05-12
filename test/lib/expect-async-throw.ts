import { types } from 'mini-extract-plugin';

/**
 * This function serves as a workaround for jest not working properly when
 * using the .rejects/.resolves methods in async function is parametrized
 * (test.each()) tests.
 */
export default async function expectAsyncThrow(fn: types.util.AnyFunc) {
  let gotError = false;
  try {
    await fn();
  } catch (err) {
    gotError = true;
    console.info('Caught following error: \n', err);
  }
  expect(gotError).toBe(true);
}
