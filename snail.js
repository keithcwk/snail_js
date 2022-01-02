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

  console.log("final result");
  console.log(result);
  return (result = [].concat(...result));
}
