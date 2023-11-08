const arr = [1, 6, 23, 8, 4, 8, 3, 7];
let targetNumber = 7;

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const sortedArray = mergeSort(arr.slice());

console.log(sortedArray);

function binarySearch(sortedArray, targetNumber) {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (sortedArray[mid] === targetNumber) {
      return mid; // znaleziono element
    } else if (sortedArray[mid] < targetNumber) {
      left = mid + 1; // przesuwa lewą granicę
    } else {
      right = mid - 1; // przesuwa prawą granicę
    }
  }

  return -1; // element nie został znaleziony
}

const result = binarySearch(sortedArray, targetNumber);
if (result !== -1) {
  console.log(
    `Element ${targetNumber} został znaleziony na pozycji ${result + 1}.`
  );
} else {
  console.log(`Element ${targetNumber} nie został znaleziony w tablicy`);
}
