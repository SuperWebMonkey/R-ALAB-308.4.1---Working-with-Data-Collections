console.log("R-ALAB");

//  part 1 - refactoring the code

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

// Using cthe numOfCol
// let splitAry2 = csvString.split(",");
// console.log(splitAry2);

// for (let i = 0; i < splitAry2.length; i++) {
//   for (let j = 0; j < splitAry2[j].length; j++) {}
// }

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

// part 3 - Transforming Data
console.log("\npart 3 - Transforming Data");
let colAry = mainAry[0];
console.log("columns are ", colAry);
let mainAry2 = [];

for (let i = 1; i < mainAry.length; i++) {
  let table = {};
  for (j = 0; j < mainAry[i].length; j++) {
    let id = mainAry[0][j];
    // console.log("id: ", id);
    console.log(mainAry[i][j]);
    table[id] = mainAry[i][j];
    // console.log(table[id]);
    // console.log(id);
    // console.log(table);
  }
  console.log("");
  console.log(table);
  // console.log("");
  mainAry2.push(table);
  // console.log(mainAry2);
}

console.log(mainAry2);

// part 4 - Sorting and Manipulating Data
console.log("\npart 4 - Sorting and Manipulating Data");

// popping off the end
mainAry2.pop();
console.log(mainAry2);

// insert at index 1
mainAry2.splice(1, 0, {
  ID: "48",
  Name: "Barry",
  Occupation: "Runner",
  Age: "25",
});
console.log(mainAry2);

// Calculating the average length
let total = 0;
console.log(mainAry2);
for (let i = 0; i < mainAry2.length; i++) {
  console.log(`index ${i}:`, mainAry2[i].Age);
  total += Number(mainAry2[i].Age);
}
console.log("total is", total);

let colLength2 = Object.keys(mainAry2[0]).length;
console.log("Number of keys is", colLength2);

console.log(`The average of all ages in the object is ${total / colLength2}`);
