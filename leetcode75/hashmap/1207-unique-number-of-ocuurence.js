/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const countMap = new Map();
  for (let value of arr) {
    countMap.set(value, (countMap.get(value) || 0) + 1);
  }
  let set = new Set(countMap.values());
  return set.size === countMap.size;
};
