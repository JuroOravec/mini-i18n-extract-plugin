/**
 * Split an array into an array of arrays based on the return value of
 * categorizer. Items with matching return values are grouped together.
 */
export default function splitArray<T, C>(
  arr: T[],
  categorizer: (a: T, ...args: any[]) => C,
) {
  const valuesByCategories: Map<C, T[]> = new Map();
  arr.forEach((val, ...args) => {
    const category = categorizer(val, ...args);
    let values = valuesByCategories.get(category);
    if (!values) {
      values = [];
      valuesByCategories.set(category, values);
    }
    values.push(val);
  });
  return Array.from(valuesByCategories.values());
}
