/**
 * @param {number[]} gain
 * @return {number}
 */

var largestAltitude = function (gain) {
  let max = 0;
  let sum = 0;
  gain.forEach((net) => {
    sum += net;
    max = Math.max(max, sum);
  });
  return max;
};

var largestAltitude = function (gain) {
  let altitude = [0];

  for (let i = 0; i < gain.length; i++) {
    altitude.push(gain[i] + altitude[i]);
  }
  return Math.max(...altitude);
};
