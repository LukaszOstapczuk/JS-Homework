let n = 7;

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function firstNPrimes(n) {
  let primeList = [];
  let number = 2; //zaczyna od pierwszej liczby pierwszej

  while (primeList.length < n) {
    if (isPrime(number)) {
      primeList.push(number);
    }
    number++;
  }
  return primeList;
}

const result = firstNPrimes(n);
const check = isPrime(n);
console.log(result);
console.log(check);
