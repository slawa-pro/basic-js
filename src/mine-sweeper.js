const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = Array.from({ length: matrix.length }, () =>
    Array(matrix[0].length).fill(0)
  );

  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [ 0, -1],         [ 0, 1],
    [ 1, -1], [ 1, 0], [ 1, 1]
  ];

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === true) {

        for (const [dRow, dCol] of directions) {
          const newRow = row + dRow;
          const newCol = col + dCol;

          if (
            newRow >= 0 && newRow < matrix.length &&
            newCol >= 0 && newCol < matrix[0].length
          ) {
            result[newRow][newCol]++;
          }
        }
      }
    }
  }

  return result;
}


module.exports = {
  minesweeper
};
