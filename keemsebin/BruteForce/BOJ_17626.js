const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let n = input[0];
  let dp = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    dp[i] = i; // 1^2 + 1^2 + ... + 1^2 최악의 경우
    for (let j = 1; j * j <= i; j++) {
      // i를 만들 수 있는 최소 제곱수의 개수
      // i = 5, j = 2일 때, 5 = 4 + 1
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }

  console.log(dp[n]);
});
