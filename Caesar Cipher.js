let oryginalText = "bcd bcd";
let shift = 1;

function caesarCipher(oryginalText, shift, decript = false) {
  // true deszyfruje
  let result = "";

  for (let i = 0; i < oryginalText.length; i++) {
    let sign = oryginalText[i];

    if (sign.match(/[a-z]/i)) {
      let isBigLetter = sign === sign.toUpperCase();
      let signUpper = sign.toUpperCase();
      let asciiCode = signUpper.charCodeAt(0);

      if (decript) {
        let shiftCipher = ((asciiCode - 65 - shift + 26) % 26) + 65;
        let newSign = String.fromCharCode(shiftCipher);
        result += isBigLetter ? newSign : newSign.toLowerCase();
      } else {
        let shiftCipher = ((asciiCode - 65 + shift) % 26) + 65;
        let newSign = String.fromCharCode(shiftCipher);
        result += isBigLetter ? newSign : newSign.toLowerCase();
      }
    } else {
      result += sign;
    }
  }

  return result;
}

const cipher = caesarCipher(oryginalText, shift);
console.log(cipher);
