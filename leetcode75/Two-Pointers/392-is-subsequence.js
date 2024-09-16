/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  // t를 가지고 s를 만들 수 있냐
  let i = 0;
  let j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
  return i === s.length;
};

const isSubsequence = (s, t, index = 0) => {
  if (s.length > t.length) return false;

  for (let i = 0; i < t.length; i++) {
    if (s[index] == t[i]) {
      index++;
      if (index == s.length) break;
    }
  }
  return s.length === index;
};

var isSubsequence = function (s, t) {
  let j = 0;
  for (let i = 0; i < t.length && j < s.length; i++) {
    if (t[i] == s[j]) j++;
  }
  return j == s.length;
};
