/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  var result = "";
  let i = 0;
  let j = 0;

  for (i = 0, j = 0; i < word1.length && j < word2.length; i++, j++) {
    result += word1[i] + word2[j];
  }

  return result + word1.slice(i) + word2.slice(j);
};
