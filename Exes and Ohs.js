/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

// My solution:

function XO(str) {
  // 1. Convert string to lowercase (since it's case insensitive)
  const lowerCaseString = str.toLowerCase();

  // 2. Separate the string into an array with individual chars
  const stringArray = [...lowerCaseString];

  // 3. Count the x's and o's in the "stringArray"

  const counter = {
    x: 0,
    o: 0
  };

  // 4. Increment the counter for each x and o
  stringArray.forEach(num => {
    if (num === "x") {
      counter.x++;
    }
    if (num === "o") {
      counter.o++;
    }
  });

  // 4. Compare x and o to see if they're the same
  return counter.x === counter.o;
}

// OTHER CLEVER SOLUTIONS AND BEST PRACTICES:

// 1
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

// 2
const XO = str => {
  str = str.toLowerCase().split("");
  return (
    str.filter(x => x === "x").length === str.filter(x => x === "o").length
  );
};

// 3
function XO(str) {
  var a = str.replace(/x/gi, ""),
    b = str.replace(/o/gi, "");
  return a.length === b.length;
}

// 4
function XO(str) {
  return (
    str.toLowerCase().split("x").length === str.toLowerCase().split("o").length
  );
}
