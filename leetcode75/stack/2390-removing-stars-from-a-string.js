/**
 * @param {string} s
 * @return {string}
 */
const removeStars = (s) => {
  let stack = [];
  for (let str of s) {
    if (str === "*") {
      stack.pop();
    } else {
      stack.push(str);
    }
  }
  return stack.join("");
};
