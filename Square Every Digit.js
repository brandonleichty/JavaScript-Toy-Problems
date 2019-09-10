/* 
In this exercise you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer

https://www.codewars.com/kata/square-every-digit/javascript
*/

// My solution

function squareDigits(num) {
  // 1. Convert number to string
  const string = num.toString();

  // 2. Convert string into array of individual characters
  const arrayOfDigits = [...string];

  let computedArray = [];

  // 3. Push each computed/squared value into a new array
  arrayOfDigits.forEach(number => {
    computedArray.push(Math.pow(Number(number), 2));
  });

  let combinedArray = "";

  // 4. Combine each charter in the computedArray into a single string value
  computedArray.forEach(char => {
    return (combinedArray = combinedArray + char);
  });

  // 5. Convert the string value to a number and return it
  const finalNumber = Number(combinedArray);
  return finalNumber;
}

// OTHER CLEVER SOLUTIONS AND BEST PRACTICES:

// 1

function squareDigits(num) {
  return Number(
    ("" + num)
      .split("")
      .map(function(val) {
        return val * val;
      })
      .join("")
  );
}

// 2

function squareDigits(num) {
  var array = num
    .toString()
    .split("")
    .map(function(int) {
      var i = parseInt(int);
      return i * i;
    });

  return parseInt(array.join(""));
}
