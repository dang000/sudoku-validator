// Input board is a 2D matrix of size 9x9
// Assume board[row][col] can only be 1-9 and ""

function validateBoard(board) {
    return checkRow(board) && checkColumn(board) && checkSubRegion(board, 0, 0);
}

// Validate rows
function checkRow(board) {
    for (let row = 0; row < board.length; row++) {
        let rowMap = {};
        for (let col = 0; col < board[0].length; col++) {
            let currValue = board[row][col];
            if (currValue === "") continue;
            if (rowMap[currValue]) {
                return false;
            } else {
                rowMap[currValue] = true;
            }
        }
    }

    return true;
}

// Validate columns
function checkColumn(board) {
    for (let col = 0; col < board[0].length; col++) {
        let colMap = {};
        for (let row = 0; row < board.length; row++) {
            let currValue = board[row][col];
            if (currValue === "") continue;
            if (colMap[currValue]) {
                return false;
            } else {
                colMap[currValue] = true;
            }
        }
    }

    return true;
}

// Validate 3x3 sub regions
function checkSubRegion(board, row, col) {
    if (row >= board.length) return true;
    if (col >= board[0].length) return true;

    let regionMap = {};
    for (let i = row; i < row + 3; i++) {
        for (let j = col; j < col + 3; j++) {
            let currValue = board[i][j];
            if (currValue === "") continue;
            if (regionMap[currValue]) {
                return false;
            } else {
                regionMap[currValue] = true;
            }
        }
    }

    return checkSubRegion(board, row + 3, col) && checkSubRegion(board, row , col + 3);
}
