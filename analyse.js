let  =
'1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'

function solve() {
  var changed = 0;
  do {
    // сужаем множество значений для всех нерешенных чисел
    changed = updateSuggests();
    steps++;
    if ( 81 < steps ) {
      // Зашита от цикла
      break;
    }
  } while (changed);

  function updateSuggests() {
    var changed = 0;
    var buf = arrayDiff(solved[1][3][2], rowContent(1));
    buf = arrayDiff(buf, colContent(3));
    buf = arrayDiff(buf, sectContent(1, 3));
    for ( var i=0; i<9; i++) {
      for ( var j=0; j<9; j++) {
        if ( 'unknown' != solved[i][j][1] ) {
          // Здесь решение либо найдено, либо задано
          continue;
        }
        // "Одиночка"
        changed += solveSingle(i, j);
        // "Скрытый одиночка"
        changed += solveHiddenSingle(i, j);
      }
    }
    return changed;
  }; // end of method updateSuggests()

//   * Метод "Одиночка"
// */
function solveSingle(i, j) {
  solved[i][j][2] = arrayDiff(solved[i][j][2], rowContent(i));
  solved[i][j][2] = arrayDiff(solved[i][j][2], colContent(j));
  solved[i][j][2] = arrayDiff(solved[i][j][2], sectContent(i, j));
  if ( 1 == solved[i][j][2].length ) {
    // Исключили все варианты кроме одного
    markSolved(i, j, solved[i][j][2][0]);
    return 1;
  }
  return 0;
}; // end of method solveSingle()
