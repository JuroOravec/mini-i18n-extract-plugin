import { types } from 'mini-extract-plugin';

type PObject<T = any> = {
  promise: Promise<T> | null;
  resolve: types.util.AnyFunc | null;
  reject: types.util.AnyFunc | null;
};

export default function exposedPromise() {
  const pObject: PObject = {
    promise: null,
    resolve: null,
    reject: null,
  };
  pObject.promise = new Promise((resolve, reject) => {
    pObject.resolve = (...args) => resolve(...args);
    pObject.reject = (...args) => reject(...args);
  });
  return pObject;
}
