/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

let moveZeroes = function (nums) {
  let notZero = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[notZero] = nums[i];
      notZero++;
    }
  }

  for (let i = notZero; i < nums.length; i++) {
    nums[i] = 0;
  }
};

// sol 2
let moveZeroes2 = function (nums) {
  let low = 0;
  let high = low + 1;

  while (high <= nums.length - 1) {
    if (nums[low] !== 0) {
      low++;
    } else {
      if (nums[high] !== 0) {
        [nums[low], nums[high]] = [nums[high], nums[low]];
        low++;
      }
    }
    high++;
  }
};
