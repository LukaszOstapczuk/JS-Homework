let array = [1, 6, 23, 8, 4, 8, 3, 7];

function reverseArray(array) {
  let reverseArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);
  }
  return reverseArray;
}

let reversed = reverseArray(array);
console.log(array);
console.log(reversed);
