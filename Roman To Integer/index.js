const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const inputArray = [...s];
  const romanArray = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  const valueArray = [1, 5, 10, 50, 100, 500, 1000];
  const conditionalLetters = ['I', 'X', 'C'];
  let result = 0;
  const inputLength = inputArray.length;
  for (let idx = 0; idx < inputLength; idx++) {
    let romanNumber = inputArray[idx];
    if (conditionalLetters.indexOf(romanNumber) > -1 && idx + 1 < inputLength) {
      if (romanNumber === 'I' && inputArray[idx + 1] === 'V') {
        result += 4;
        idx++;
      } else if (romanNumber === 'I' && inputArray[idx + 1] === 'X') {
        result += 9;
        idx++;
      } else if (romanNumber === 'X' && inputArray[idx + 1] === 'L') {
        result += 40;
        idx++;
      } else if (romanNumber === 'X' && inputArray[idx + 1] === 'C') {
        result += 90;
        idx++;
      } else if (romanNumber === 'C' && inputArray[idx + 1] === 'D') {
        result += 400;
        idx++;
      } else if (romanNumber === 'C' && inputArray[idx + 1] === 'M') {
        result += 900;
        idx++;
      }
    }
    if (romanNumber === inputArray[idx]) {
      result += valueArray[romanArray.indexOf(romanNumber)];
    }

  }

  return result;
};

rl.question("Enter the roman numeral you want to convert - ", (romanNumber) => {
  console.log(romanToInt(Number(romanNumber)));
});
