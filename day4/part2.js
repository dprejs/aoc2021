let { numbers, boards} = require('./data.js');
const {scoreBoard, findDrawsToWin} = require('./part1.js');
//format data into arrays of arrays
numbers = numbers.split(',');
boards = boards.split('\n\n');
boards.forEach((board, i, boards) => {
  board = board.split('\n');
  board.forEach((row, i, board) => {
    row = row.trim()
    board[i] = row.split(/\s+/);
  });
  boards[i] = board
});
console.log(boards);
let slowestBoard ={
  board: undefined,
  draws: undefined,
  i: undefined
}

boards.forEach((board, i) => {
  const draws = findDrawsToWin(board, numbers);
  if (slowestBoard.board === undefined ||
    draws > slowestBoard.draws) {
    slowestBoard.board = board;
    slowestBoard.draws = draws
    slowestBoard.i = i;
  }
})

console.log(scoreBoard(slowestBoard.board, slowestBoard.draws, numbers));
