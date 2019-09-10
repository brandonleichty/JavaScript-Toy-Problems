/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

*/

// My solution:
function toCamelCase(str) {
  // 1. Split words by removing - or _
  const arrayOfWords = str.split(/-|_/);
  let newArray = [];

  // 2. Push first word into newArray
  newArray.push(arrayOfWords[0]);

  for (let i = 1; i < arrayOfWords.length; i++) {
    const nameWord =
      arrayOfWords[i].charAt(0).toUpperCase() + arrayOfWords[i].slice(1);
    newArray.push(nameWord);
  }

  return newArray.join("");
}

// OTHER CLEVER SOLUTIONS AND BEST PRACTICES:

// 1
function toCamelCase(str) {
  var regExp = /[-_]\w/gi;
  return str.replace(regExp, function(match) {
    return match.charAt(1).toUpperCase();
  });
}

// 2
function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}
