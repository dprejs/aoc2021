let { numbers, boards} = require('./data.js');
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

let fastestBoard ={
  board: undefined,
  draws: undefined,
  i: undefined
}
const findDrawsToWin = (board, numbers) => {
  let rows = new Array(5).fill(0);
  let columns = new Array(5).fill(0);
  for (let i = 0; i < numbers.length; i++) {
    const drawnNumber = numbers[i];
    for (let j = 0; j < board.length; j++) {
      const row = board[j];
      const index = row.indexOf(drawnNumber);
      if (index !== -1) {
        columns[index] ++;
        rows[j] ++;
        if (columns[index] === 5 || rows[j] === 5) {
          return i+1;
        }
      }
    }
  }
}
// find the fastest board
boards.forEach((board, i) => {
  const draws = findDrawsToWin(board, numbers);
  if (fastestBoard.board === undefined ||
    draws < fastestBoard.draws) {
    fastestBoard.board = board;
    fastestBoard.draws = draws
    fastestBoard.i = i;
  }

})
console.log(fastestBoard)

const scoreBoard = (board, draws, numbers) => {
  const drawnNumbers = numbers.slice(0, draws);
  let score = 0;
  board.forEach((row) => {
    row.forEach((number) => {
      if (!drawnNumbers.includes(number)){
        score += parseInt(number);
      }
    })
  });
  return score * drawnNumbers[draws - 1];
}

console.log(scoreBoard(fastestBoard.board, fastestBoard.draws, numbers));
module.exports = {scoreBoard, findDrawsToWin};