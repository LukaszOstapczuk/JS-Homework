let n = 10;

function fibonacciRecursive(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    const fibList = fibonacciRecursive(n - 1);
    fibList.push(fibList[fibList.length - 1] + fibList[fibList.length - 2]);
    return fibList;
  }
}

const result = fibonacciRecursive(n);
console.log(result);
