/*

You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

https://www.codewars.com/kata/youre-a-square/javascript
*/

// My solution:

var isSquare = function(n) {
  return Math.sqrt(n) % 1 === 0;
};

/*
Comment from wthit56

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

So we get the square root with Math.sqrt(n). Then we need to see if that number is an integer, as in it has no decimal places.

This solution does this my finding the modular of 1 with result % 1. Modular tries to divide the number by some value, and returns what cannot be divided equally. So here, it tries to divide by 1. Something like 8.2 can be divided into 1 a total of 8 times. But the 0.2 is remaining. So the modular operation returns 0.2. In this way, result % 1 will return any decimal a value has. But if it divides perfectly, there is no decimal, so 0 will be returned.

So to check if a value is a whole number, an integer, we can check to see if that mod is 0, with result === 0.

To summarize:

Math.sqrt(n) // Find the square root of n.
    % 1 // Find the remainder when dividing by 1 (the same as finding the decimal of the number).
    === 0 // Is there no decimal?
This returns true when the square root of n is an integer, a whole number with no decimal place. This returns false when the square root of n is not an integer, a whole number with decimal places.

*/
