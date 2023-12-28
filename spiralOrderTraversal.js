/*

Spiral Order Traversal in Array
Given a 2D array of integers, implement an algorithm to print its elements in spiral order.

Example1
Input:
Rows: 3
Columns: 3
1 2 3 
4 5 6 
7 8 9
Output:
1 2 3 6 9 8 7 4 5
Explanation:
The elements are as follows:1 2 3 4 5 6 7 8 9

The output is the elements of the array printed in spiral order: 1 2 3 6 9 8 7 4 5.

The elements are traversed in the following order: top row from left to right, right column from top to bottom, bottom row from right to left, and left column from bottom to top.

*/

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let top = 0;
let left = 0;
let right = arr[0].length - 1;
let bottom = arr.length - 1;
let size = arr.length * arr[0].length;
let result = [];

while (result.length < size) {
  for (let i = left; i <= right && result.length < size; i++) {
    result.push(arr[top][i]);
  }
  top++; // 0 -> 1

  for (let i = top; i <= bottom && result.length < size; i++) {
    result.push(arr[i][right]);
  }
  right--; // 2 -> 1

  for (let i = right; i >= left && result.length < size; i--) {
    result.push(arr[bottom][i]);
  }
  bottom--; // 2 => 1

  for (let i = bottom; i >= top && result.length < size; i--) {
    result.push(arr[i][left]);
  }
  left++; // 0 -> 1
}

console.log(result);
