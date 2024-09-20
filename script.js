console.log("R-ALAB");

//  part 1 - refactoring the code
//  and part 2 - teacher's code
const csvStr =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

let cellAry = [];
let currentCell = 0;
let currentRow = 0;
let columns = 0;
let table = [];

for (let i = 0; i < csvStr.length; i++) {
  // checking for new cell
  if (csvStr[i] === ",") {
    if (currentRow === 0) {
      columns++;
    }
    currentCell++;
    continue;
  }
  // checking for a new line
  if (csvStr[i] === "\n") {
    // reset the ary
    cellAry = [];
    currentCell = 0;
  }

  // Part 1 code
  if (cellAry[currentCell]) {
    cellAry[currentCell] += csvStr[i];
  } else {
    cellAry[currentCell] = csvStr[i];
  }

  // Part 2 code
  if (table[currentRow] === undefined) {
    table[currentRow] = [];
  }

  if (table[currentRow][currentCell]) {
    cellAry[currentRow][currentCell] += csvStr[i];
  } else {
    cellAry[currentRow][currentCell] = csvStr[i];
  }

  // if (
  //   (currentCell === columns && csvStr[i + 1] === "\n") ||
  //   i + 1 === csvString.length
  // ) {
  //   console.log(cellAry.toString());
  // }
}

// part 2 - Expanding Functionality - My version
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
  // console.log(`index ${i}:`, mainAry2[i].Age);
  total += Number(mainAry2[i].Age);
}
console.log("total is", total);

let colLength2 = Object.keys(mainAry2[0]).length;
console.log("Number of keys is", colLength2);

console.log(`The average of all ages in the object is ${total / colLength2}`);

// part 5 - full circle
console.log("\npart 5 - full circle");
const circleAry = [];
console.log(mainAry2);

// for loop for keys
const propAry = [];
for (const prop in mainAry2[0]) {
  // console.log(prop);
  propAry.push(prop);
}
// console.log(propAry);

// size for the number of colums
let cLen2 = propAry.length;
// console.log("col length; ", cLen2);

// for loop for values
for (let i = 0; i < mainAry2.length; i++) {
  let obj = mainAry2[i];
  let values = [];
  let subAry = [];

  for (let j = 0; j < cLen2; j++) {
    // console.log(obj[propAry[j]]);
    subAry.push(obj[propAry[j]]);
  }
  // console.log(subAry);

  circleAry.push(subAry);
}

// console.log(circleAry);
// putting the key's back into the ary
circleAry.unshift(propAry);
console.log(circleAry);

// converting back to a string
let circleStr = "";

for (let i = 0; i < circleAry.length; i++) {
  for (let j = 0; j < circleAry[i].length; j++) {
    if (j !== circleAry[i].length - 1) {
      circleStr += circleAry[i][j] + ",";
    } else {
      circleStr += circleAry[i][j] + "\\n";
    }
  }
  // console.log(circleStr);

  if (i === circleAry.length - 1) {
    circleStr = circleStr.slice(0, -2);
  }
}

console.log(circleStr);
