const array = [1, 6, 23, 8, 4, 8, 3, 7];
const numberOfAttempts = 5;

function findLowestRandomNumber(array, attempts) {
  if (attempts <= 0) {
    return null;
  }

  let randomNumbers = [];
  for (let i = 0; i < attempts; i++) {
    let randomIndex = Math.floor(Math.random() * array.length);
    randomNumbers.push(array[randomIndex]);
  }

  console.log("Losowo wybrane liczby:", randomNumbers);

  return Math.min(...randomNumbers);
}

const lowestRandomNumber = findLowestRandomNumber(array, numberOfAttempts);
console.log("Najmniejsza Losowo Wybrana Liczba:", lowestRandomNumber);
