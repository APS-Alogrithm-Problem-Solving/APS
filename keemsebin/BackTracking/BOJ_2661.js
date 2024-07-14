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
  let num = [1, 2, 3];

  // 나쁜 수열인지 확인하는 함수
  const isPossible = (seq) => {
    const len = seq.length;
    for (let i = 1; i <= Math.floor(len / 2); i++) {
      if (seq.slice(-i).join("") === seq.slice(-2 * i, -i).join("")) {
        return false;
      }
    }
    return true;
  };

  const dfs = (count, seq) => {
    if (count === N) {
      console.log(seq.join(""));
      process.exit();
    }
    for (let i = 0; i < num.length; i++) {
      seq.push(num[i]);
      if (isPossible(seq)) {
        dfs(count + 1, seq);
      }
      seq.pop();
    }
  };
  dfs(0, []);
});
