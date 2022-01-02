let smallOddArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let oddArray = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

let smallEvenArray = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

let evenArray = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36],
];

// get the first row of array
function getFirstRow(array, result) {
  let firstRow = [];
  firstRow.push(array[0]);

  result.push(array[0]);
}

// gets the right column
function getRight(array, iterations, result, dimensions) {
  let rightSide = [];
  let i = 1;
  while (i < array.length - 1) {
    rightSide.push(array[i][dimensions - iterations - 1]);
    i++;
  }
  result.push(rightSide);
}

// gets last row
function getLastRow(array, iterations, result, dimensions) {
  let lastRow = [];
  array[dimensions - iterations - 1].forEach((item) => lastRow.unshift(item));
  if (dimensions - iterations != 1) {
    result.push(lastRow);
  }
}

// gets left column
function getLeft(array, result) {
  let leftSide = [];
  let i = 1;
  while (i < array.length - 1) {
    leftSide.unshift(array[i][0]);
    i++;
  }
  result.push(leftSide);
}

// remove one layer n
function stripALayer(array) {
  array.shift();
  array.pop();
  array.forEach((row) => row.splice(0, 1));
  array.forEach((row) => row.splice(row.length - 1, 1));
}

function snail(array) {
  let result = [];
  let iterations = 0;
  let dimensions = array[0].length;

  while (dimensions > iterations) {
    getFirstRow(array, result);
    getRight(array, iterations, result, dimensions);
    getLastRow(array, iterations, result, dimensions);
    getLeft(array, result);
    stripALayer(array);
    dimensions--;
    iterations++;
  }
  if (array.length == 1) {
    result.push(array[0]);
  }

  return result = [].concat(...result);
  console.log("final result");
  console.log(result);
}

// // Optimal solution
// snail = function (array) {
//   var result;
//   while (array.length) {
//     // Steal the first row.
//     result = result ? result.concat(array.shift()) : array.shift();
//     // Steal the right items.
//     for (var i = 0; i < array.length; i++) result.push(array[i].pop());
//     // Steal the bottom row.
//     result = result.concat((array.pop() || []).reverse());
//     // Steal the left items.
//     for (var i = array.length - 1; i >= 0; i--) result.push(array[i].shift());
//   }
//   console.log(result);
//   return result;
// };
snail(smallOddArray);
snail(oddArray);
snail(smallEvenArray);
snail(evenArray);
