const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [N, M, K, X] = input[0].split(" ").map(Number);
  let arr = input.slice(1);
  let city = Array.from({ length: N + 1 }, () => []);
  let result = [];

  // 단방향 그래프
  for (let i = 0; i < arr.length; i++) {
    let [A, B] = arr[i].split(" ").map(Number);
    city[A].push(B);
  }

  let distance = Array(N).fill(0);
  const dfs = (start) => {
    let queue = [start]; // 도시번호 저장
    distance[start] = 1;

    while (queue.length) {
      const cur = queue.shift(); // 도시번호
      if (distance[cur] == K + 1) {
        result.push(cur);
        continue;
      }
      for (let node of city[cur]) {
        if (!distance[node]) {
          queue.push(node);
          distance[node] = distance[cur] + 1;
        }
      }
    }
  };

  dfs(X);
  if (result.length) {
    result.sort((a, b) => a - b);
    console.log(result.join("\n"));
  } else {
    console.log(-1);
  }
});
