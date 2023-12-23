/*
Sum of Two Matrix
Take 2 2d arrays from the user and return a 2d array as their sum. Note - rows and cols must be the same of both the input matrix else throw an error message "Arrays must have the same dimensions"

Example1
Input:

Row: 2
Column: 3
1
2
3
4
5
6
7
8
9
10
11
12
Output:
[[8, 10, 12],[14, 16, 18]]
Explanation:


*/

const inputMatrixOne = [
  [1, 2, 3],
  [4, 5, 6],
];

const inputMatrixTwo = [
  [7, 8, 9],
  [10, 11, 12],
];

// const requiredOutputArray = [
//   [8, 10, 12],
//   [14, 16, 18],
// ];

//  ================ solution ===========

const requiredMatrix = [[], []];

let rows = inputMatrixOne.length;
let columns = inputMatrixOne[0].length;

for (let r = 0; r < rows; r++) {
  for (let c = 0; c < columns; c++) {
    requiredMatrix[r][c] = inputMatrixOne[r][c] + inputMatrixTwo[r][c];
  }
}

console.log(requiredMatrix);
