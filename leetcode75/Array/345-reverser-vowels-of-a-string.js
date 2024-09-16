/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const regex = /[aeiou]/i;
  const vowels = [];
  let result = "";

  for (let item of s) {
    if (regex.test(item)) {
      vowels.push(item);
    }
  }

  for (let item of s) {
    if (item.match(regex)) {
      result += vowels.pop();
    } else {
      result += item;
    }
  }
  return result;
};
