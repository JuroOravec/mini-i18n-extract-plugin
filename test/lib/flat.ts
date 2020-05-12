/**
 * Shim for Array.flat needed for compatibility with Node 10
 */
export default function flat<T>(arr: T[][]) {
  const flatArr = [];
  for (const itemArr of arr) {
    for (const item of itemArr) {
      flatArr.push(item);
    }
  }
  return flatArr;
}
