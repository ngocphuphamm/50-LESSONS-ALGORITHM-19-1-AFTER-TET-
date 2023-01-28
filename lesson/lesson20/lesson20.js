//https://leetcode.com/problems/zigzag-conversion/
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s = "PAYPALISHIRING", numRows = 3) {
    if (numRows == 1) {
        return s;
    }
    let n = s.length;

    // The number of sections is determined by dividing the length
    // of the input string (n) by the number of characters
    // in one complete cycle (2 * numRows - 2)

    let sections = Math.ceil(n / (2 * numRows - 2));

    // Each section will have (numRows - 1) columns,
    // and the number of sections is determined by the length
    //of the input string and the number of rows
    let numCols = sections * (numRows - 1);

    let matrix = init2DMatrix(numRows, numCols);
    let currRow = 0,
        currCol = 0;
    let currStringIndex = 0;
    while (currStringIndex < n) {
        // Move down.
        while (currRow < numRows && currStringIndex < n) {
            matrix[currRow][currCol] = s[currStringIndex];
            currRow++;
            currStringIndex++;
        }

        currRow -= 2;
        currCol++;

        // Move up (with moving right also).
        while (currRow > 0 && currCol < numCols && currStringIndex < n) {
            matrix[currRow][currCol] = s[currStringIndex];
            currRow--;
            currCol++;
            currStringIndex++;
        }
    }
    let answer = matrix.map(row => row.join('')).join('');
    return answer.replaceAll(' ', '');
};

function init2DMatrix(n, m) {
    return new Array(n).fill(0).map(() => new Array(9).fill(""));
}

console.log(convert());
