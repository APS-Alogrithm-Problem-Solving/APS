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
  let weight = input.slice(1).map((item) => item.split(" ").map(Number));
  let max = -Infinity;

  const dfs = (cnt, sum) => {
    if (cnt === N) {
      max = Math.max(max, sum);
      return;
    }
    if (weight[cnt][0] <= 0 || weight[cnt][1] <= 0) {
      dfs(cnt + 1, sum);
    } else {
      let flag = false;
      for (let i = 0; i < N; i++) {
        if (i === cnt) continue;
        if (weight[i][0] > 0 && weight[i][1] > 0) {
          flag = true;
          weight[cnt][0] -= weight[i][1];
          weight[i][0] -= weight[cnt][1];
          dfs(
            cnt + 1,
            sum + (weight[cnt][0] <= 0) * 1 + (weight[i][0] <= 0) * 1
          );
          weight[cnt][0] += weight[i][1];
          weight[i][0] += weight[cnt][1];
        }
      }
      if (!flag) {
        dfs(cnt + 1, sum);
      }
    }
  };
  dfs(0, 0);

  console.log(max);
});
