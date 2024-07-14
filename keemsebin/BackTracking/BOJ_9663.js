const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let N = Number(input[0]);
  let count = 0;
  let col = Array(N).fill(0);

  const isPossible = (row) => {
    for (let i = 0; i < row; i++) {
      // 같은 열에 있는지, 대각선에 있는지 확인
      if (col[i] === col[row] || Math.abs(col[row] - col[i]) === row - i) {
        return false;
      }
    }
    return true;
  };

  const dfs = (row) => {
    if (row === N) {
      count++;
      return;
    }
    for (let i = 0; i < N; i++) {
      col[row] = i;
      if (isPossible(row)) {
        dfs(row + 1);
      }
    }
  };
  dfs(0);

  console.log(count);
});
