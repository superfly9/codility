/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */

var findDifference = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  const arr1 = Array.from(set1);
  const arr2 = Array.from(set2);

  const result = [[], []];

  for (let value1 of arr1) {
    if (!set2.has(value1)) {
      result[0] = [...result[0], value1];
    }
  }

  for (let value2 of arr2) {
    if (!set1.has(value2)) {
      result[1] = [...result[1], value2];
    }
  }
  return result;
};

// sol2
var findDifference2 = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let csm = [];
  csm[0] = [...set1].filter((x) => !set2.has(x));
  csm[1] = [...set2].filter((x) => !set1.has(x));
  return csm;
};
