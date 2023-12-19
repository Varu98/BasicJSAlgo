/* 

Transpose a matrix
Take a 2d array as input and return the tranposeof that 2d Matrix

Example1
Input:

Rows: 2
Columns: 2
1
2
3
4
Output:
1 3
2 4
Explanation:


*/

const arr = [
  [1, 2],
  [3, 4],
];

console.log(arr, arr.length);

let rows = arr.length;
let columns = arr[0].length;

const transposedArray = Array.from({ length: columns }, () =>
  new Array(rows).fill(0)
);

for (let r = 0; r < rows; r++) {
  for (let c = 0; c < columns; c++) {
    transposedArray[c][r] = arr[r][c];
  }
}

console.log(transposedArray, transposedArray.length);
return transposedArray;
