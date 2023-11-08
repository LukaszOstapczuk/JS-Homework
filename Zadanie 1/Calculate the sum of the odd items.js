const array = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];

function getOddArray(array) {
  let oddArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddArray.push(array[i]);
    }
  }
  return oddArray;
}
function calculateSum(oddNumbers) {
  let sum = 0;

  for (let currentNumber of oddNumbers) {
    sum = sum + currentNumber;
  }

  return sum;
}
const oddNumbers = getOddArray(array);
const sum = calculateSum(oddNumbers);

console.log(sum);
