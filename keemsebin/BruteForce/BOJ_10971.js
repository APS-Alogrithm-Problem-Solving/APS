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
  let tsp = input.slice(1).map((line) => line.split(" ").map(Number));
  let visited = Array(N).fill(false); // 방문한 도시인지 확인

  let charge = Infinity; // 비용
  visited[0] = true;

  function dfs(cur, cnt, sum) {
    // N 만큼의 도시를 방문하고 돌아온 경우
    if (cnt === N) {
      // 시작 도시로 돌아올 수 있는지 확인
      if (tsp[cur][0] !== 0) {
        charge = Math.min(charge, sum + tsp[cur][0]);
      }
      return;
    }
    for (let i = 0; i < N; i++) {
      // 방문을 했거나 갈 수 없는 길이면 패스
      if (visited[i] || tsp[cur][i] === 0) continue;
      visited[i] = true;
      dfs(i, cnt + 1, sum + tsp[cur][i]);
      // 다시 돌아오는 경우
      visited[i] = false;
    }
  }
  dfs(0, 1, 0);
  console.log(charge);
});
