let str =
  "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";

/*
1-5|8-2|---
-9-|-76|4-5
2--|4--|819
-19|--7|3-6
762|-83|-9-
---|-61|-5-
--7|6--|-3-
43-|-2-|5-1
6--|3-8|9--
*/

// Разделяем строку на массивы

let splitPuzzle = (str) => {
  let strArr = str.split("");
  let arr = [];
  for (let i = 0; i < strArr.length; i++) {
    arr.push(strArr.splice(0, 9));
  }
  return arr;
};

const puzzle = splitPuzzle(str);

// Находим искомый квадрат и выводим его значение

function boxArray(row, col, puzzle) {
  let preArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const arr = [];
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      if (!preArr.includes(puzzle[row + i][col + j])) {
        arr.push(puzzle[row + i][col + j]);
      }
    }
  }
  return arr;
}

console.log(boxArray(3, 3, puzzle));

// Находим столбец и выводим массив его значений

function columnArray(row, col, puzzle) {
  const arr = [];
  for (i = 0; i < 9; i++) {
    arr.push(puzzle[col][i]);
  }
  return arr;
}

function rowArray(row, col, puzzle) {
  const arr = [];
  for (i = 0; i < 9; i++) {
    arr.push(puzzle[row][i]);
  }
  return arr;
}

function subrunner(puzzle) {
  const arr = [];
  for (i = 0; i < 9; i++) {
    for (j = 0; j < 9; j++) {
      if (puzzle[i][j] === "-") {
        boxArray, columnArray, rowArray;
      }
    }
  }
}

//if (typeof puzzle[row + i][col + j] === Number) {
null;
