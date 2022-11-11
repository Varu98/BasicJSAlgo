// Find the counts of elements of an unsorted integer array which are equal to the average of all elements of that array.
// Ex:
// Input Case 1:
// input: [2,2,2,2,2]
// output:  5
// solution : 2+ 2+ 2+ 2+ 2 = 10/5 ==> 2
// it contain five 2 element

// Input Case 2:
// input: [ 1,3,2,4,5]
// output:  1
// solution : 1+ 3+ 2+ 4+ 5 = 15/5 ==> 3
// it contain one 3 element

const arr = [2, 2, 2, 2, 2];
const arr1 = [1 + 3 + 2 + 4 + 5];

const sumOfAvg = arr.reduce(
  (accumulator, number) => (accumulator = accumulator + number / arr.length),
  0
);

console.log("Ans To Question 1 is ", sumOfAvg);

// ----------------------- Question 2 --------------------

// Given n email addresses of different domains, please send an email to the first address(in alphabetical order) of each domain. Please assume a function sendmail() to send the emails.
// Input Array = ['ghi@hotmail.com', 'def@yahoo.com', 'ghi@gmail.com', 'abc@channelier.com', 'abc@hotmail.com', 'def@hotmail.com', 'abc@gmail.com', 'abc@yahoo.com', 'def@channelier.com','jkl@hotmail.com', 'ghi@yahoo.com', 'def@gmail.com'].

// Expected Output - Below is the  order of address in which sendmail function is going to send mail.
//                                 abc@channelier.com
//                                 abc@yahoo.com
//                                 abc@gmail.com
//                                 abc@hotmail.com

const inputArray = [
  "ghi@hotmail.com",
  "def@yahoo.com",
  "ghi@gmail.com",
  "abc@channelier.com",
  "abc@hotmail.com",
  "def@hotmail.com",
  "abc@gmail.com",
  "abc@yahoo.com",
  "def@channelier.com",
  "jkl@hotmail.com",
  "ghi@yahoo.com",
  "def@gmail.com",
];

const sendMail = () => inputArray.sort();

console.log(sendMail());

// ----------------------- Question 3 --------------------
// 3. Find the average of largest and smallest numbers in an unsorted integer array?
// Eg.
// Input Case 1:
// input: [1, 4, 3, 2]
// output:  2.5
// solution : average = (1+4)/2 =>5/2 => 2.5

// input: [1, 4, 3, 4]
// output:  3
// solution : average = (1+4 +4)/3 =>9/3 => 3

const randomArr = [1, 4, 3, 2];

const sumOfElements = (arr) =>
  arr.reduce((accum, number) => {
    accum = accum + number;
    return accum;
  }, 0);

const sumOfAvgMinMax = randomArr.reduce((accum, number) => {
  if (number === Math.max(...randomArr) || number === Math.min(...randomArr)) {
    accum.push(number);
  }

  return accum;
}, []);

console.log(sumOfElements(sumOfAvgMinMax) / sumOfAvgMinMax.length);
