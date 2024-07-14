const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [N, M] = input[0].split(" ").map(Number);
  const visited = Array(N + 1).fill(false);
  const result = [];

  const dfs = (cnt, arr) => {
    if (cnt === M) {
      result.push(arr.join(" "));
      return;
    }
    for (let i = 1; i <= N; i++) {
      if (!visited[i]) {
        visited[i] = true;
        dfs(cnt + 1, arr.concat(i));
        visited[i] = false;
      }
    }
  };
  dfs(0, []);

  console.log(result.join("\n"));
});
