function scoreCalculator(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Argument passed is not an array.");
  }

  if (
    !arr.every(element => {
      return typeof element == "number" && element > 0;
    })
  ) {
    throw new Error("Value in array is not between 1 and 20.");
  }

  if (arr.length === 0) {
    return -1;
  }

  let score = arr.map(element => {
    if (element > 10) {
      return 0;
    } else if (element >= 5) {
      return 5;
    } else if (element >= 1) {
      return 10;
    }
  });

  let bonus = 0;

  if (
    arr.every(element => {
      return element < 5;
    })
  ) {
    bonus = 100;
  }

  score = score.reduce((acc, cur) => {
    return acc + cur;
  }, bonus);

  return score;
}

module.exports = scoreCalculator;
