/*

Delete elements in an array
Take an array input from the user and delete all the elements which are divisible by 2 or 3.

Example
Input

1,2,3,4,5,6,7,8,9
Output
[1, 5, 7]
Explanation
1 , 5 and 7 are not divisible by 2 or 3.

*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const isDivisibleBy3 = (num) => num % 3 === 0;

const isDivisibleBy2 = (num) => num % 2 === 0;

const elementsNotDivisibleBy2And3 = [];

arr.forEach((num) => {
  if (isDivisibleBy2(num) === false && isDivisibleBy3(num) === false)
    elementsNotDivisibleBy2And3.push(num);
});

console.log(elementsNotDivisibleBy2And3);
