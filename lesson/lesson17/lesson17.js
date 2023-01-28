//leetcode.com/problems/valid-sudoku/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
https: var isValidSudoku = function (board = data) {
    const seen = new Set();
    const n = board.length; // row number
    const m = board[0].length; // column number
    for (let i = 0; i < n; ++i) {
      for (let j = 0; j < m; ++j) {
        if (board[i][j] === ".") {
          continue;
        }
        const elNumber = `(${board[i][j]})`;
        const row_number_column_sub_3x3 = `${Math.floor(
          i / 3
        )}${elNumber}${Math.floor(j / 3)}`;
  
        const row_number_repetition = `${elNumber}${i}`;
        const column_number_repetition = `${j}${elNumber}`;
  
        if (
          seen.has(row_number_column_sub_3x3) ||
          seen.has(row_number_repetition) ||
          seen.has(column_number_repetition)
        ) {
          return false;
        }
        seen.add(row_number_column_sub_3x3);
        seen.add(row_number_repetition);
        seen.add(column_number_repetition);
  
      }
    }
    return true;
};
const data = [
  [".", ".", "4", ".", ".", ".", "6", "3", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ["5", ".", ".", ".", ".", ".", ".", "9", "."],
  [".", ".", ".", "5", "6", ".", ".", ".", "."],
  ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
  [".", ".", ".", "7", ".", ".", ".", ".", "."],
  [".", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
];

console.log(isValidSudoku());
