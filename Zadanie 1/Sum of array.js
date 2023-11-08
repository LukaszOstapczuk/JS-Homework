let array = [1, 6, 23, 8, 4, 8, 3, 7];

function calculateSum(array) {
  let sum = 0;

  for (let currentNumber of array) {
    sum = sum + currentNumber;
  }

  return sum;
}

console.log(calculateSum(array));
