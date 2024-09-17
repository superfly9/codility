/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let avg = nums.slice(0, k).reduce((acc, cur) => acc + cur, 0);
  let max = avg;
  //   i-1, i-1+k가 일종의 투 포인터역할
  for (let i = 1; i <= nums.length - k; i++) {
    avg += nums[i - 1 + k] - nums[i - 1];
    max = Math.max(max, avg);
  }
  return max / k;
};
