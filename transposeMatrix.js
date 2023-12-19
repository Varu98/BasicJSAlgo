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

console.log(arr.length);

let rows = arr.length;
let columns = arr[0].length;

const transposedArray = Array.from({ length: columns }, () =>
  new Array(rows).fill(0)
);

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < columns; j++) {
    transposedArray[i][j] = arr[j][i];
  }
}

console.log(transposedArray);
return transposedArray;
