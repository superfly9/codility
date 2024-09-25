/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s.trim().split(/\s+/).reverse().join(" ");
};

// sol2)
var reverseWords = function (s) {
  let str = s.split(" ");
  let output = "";
  for (let i = str.length - 1; i >= 0; i--)
    if (str[i]) output += (output ? " " : "") + str[i];
  // "  "을 split(" ")하면 ['','']가 된다
  return output;
};

// Medium
// https://leetcode.com/problems/reverse-words-in-a-string/description/?envType=study-plan-v2&envId=leetcode-75
