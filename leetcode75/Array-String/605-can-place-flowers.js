/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    const prev = flowerbed[i - 1] || 0;
    const next = flowerbed[i + 1] || 0;
    const cur = flowerbed[i];

    if (flowerbed[i] === 1) continue;

    if (prev === 0 && next === 0) {
      flowerbed[i] = 1;
      count++;
    }
  }
  return count >= n;
};
