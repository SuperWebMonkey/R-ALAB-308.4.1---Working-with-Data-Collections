console.log("R-ALAB");

// part 2 - Expanding Functionality
// Store result in two dimensional array
// Split the columns using the split function
console.log("\npart 2 - Expanding Functionality");
const csvString =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

let mainAry = []; // main ary that will contain the sub arrays
let i = 0;
let cell = ""; // cell of the table of data
let subAry = [];

const splitAry = csvString.split("\n");
// console.log(splitAry);

// Counting the number of columns
let word = splitAry[0]; // using the first row to check the number of columns
let numOfCol = 1;
for (let i = 0; i < word.length; i++) {
  // if , is found, increment number of columns
  if (word[i] === ",") {
    numOfCol++;
  }
}
// console.log(`num of col is ${numOfCol}`);

// adding \n at the end of each string so that it can be used in the if else
for (let i = 0; i < splitAry.length; i++) {
  splitAry[i] += "\n";
}

// total number of rows
const length = splitAry.length;

// console.log(splitAry);

for (let i = 0; i < length; i++) {
  let str = splitAry[i];
  // console.log(str);
  for (let j = 0; j < str.length; j++) {
    // console.log(str[j]);
    if (str[j] !== "," && str[j] !== "\n") {
      // console.log(str[j]);
      cell += str[j];
    } else {
      // console.log(cell);
      // adding cell to sub ary
      subAry.push(cell);
      cell = "";
    }
  }

  // adding sub ary to main ary
  mainAry.push(subAry);

  // console.log("");
  // console.log(str);
  // console.log(subAry);
  subAry = [];
}

console.log(mainAry);
