let str =
  "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";

// Разделяем строку на массивы

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

let splitPuzzle = (str) => {
  let strArr = str.split("");
  let arr = [];

  for (let i = 0; i < strArr.length; i++) {
    arr.push(strArr.splice(0, 9));
  }
  return arr;
};

let puzzle = splitPuzzle(str);
// console.log(splitPuzzle(str))

// Находим искомый квадрат и выводим его значение

function boxArray(row, col, puzzle) {
  const arr = [];
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      arr.push(puzzle[row + i][col + j]);
    }
  }
  return arr;
}

console.log(boxArray(3, 3, puzzle));

function columnArray(row, col, puzzle) {
  const arr = [];
  for (i = 0; i < 9; i++) {
    arr.push(puzzle[col]);
  }
  return arr;
}

function rowArray(row, col, puzzle) {}

//if (typeof puzzle[row + i][col + j] === Number) {
null;



function columnArray // выдача массива по столбцу 
function rowArray // выдача массива по строке
function subrunner // линейный поиск значений по всему массиву 
function  