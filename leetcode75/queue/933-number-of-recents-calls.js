var RecentCounter = function () {
  this.input = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.input.push(t);
  const min = t - 3000;
  while (this.input[0] < min) {
    this.input.shift();
  }
  return this.input.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
