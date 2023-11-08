const array = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];

function actionOnNumbers(array) {
  let resultOfAction = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      resultOfAction = resultOfAction + array[i];
    }
    if (array[i] % 2 !== 0) {
      resultOfAction = resultOfAction - array[i];
    }
  }
  return resultOfAction;
}

const result = actionOnNumbers(array);
console.log("Wynik działania:", result);
