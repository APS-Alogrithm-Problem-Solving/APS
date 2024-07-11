const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = 10;
  const board = input.map((item) => item.split(" ").map(Number));
  let minPapers = Infinity;
  const paperCount = [0, 5, 5, 5, 5, 5];

  const canPlacePaper = (x, y, size) => {
    if (x + size > N || y + size > N) return false;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (board[x + i][y + j] === 0) return false;
      }
    }
    return true;
  };

  const placePaper = (x, y, size, state) => {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        board[x + i][y + j] = state;
      }
    }
  };

  const backtrack = (x, y, papersUsed) => {
    if (y === N) {
      backtrack(x + 1, 0, papersUsed);
      return;
    }
    if (x === N) {
      minPapers = Math.min(minPapers, papersUsed);
      return;
    }
    if (board[x][y] === 0) {
      backtrack(x, y + 1, papersUsed);
      return;
    }
    for (let size = 5; size >= 1; size--) {
      if (paperCount[size] > 0 && canPlacePaper(x, y, size)) {
        placePaper(x, y, size, 0);
        paperCount[size]--;
        backtrack(x, y + 1, papersUsed + 1);
        placePaper(x, y, size, 1);
        paperCount[size]++;
      }
    }
  };

  backtrack(0, 0, 0);
  console.log(minPapers === Infinity ? -1 : minPapers);
});
