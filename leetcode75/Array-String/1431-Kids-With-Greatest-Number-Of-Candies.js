var kidsWithCandies = function (candies, extraCandies) {
  let result = [];
  for (let i = 0; i < candies.length; i++) {
    const candy = candies[i];

    result[i] = Math.max(...candies) <= candy + extraCandies;
  }
  return result;
};

// sol2)
var kidsWithCandies = function (candies, extraCandies) {
  var max = Math.max(...candies);

  var result = candies.map((item) => item + extraCandies >= max);
  return result;
};
