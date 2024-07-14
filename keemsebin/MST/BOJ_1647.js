const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [N, M] = input[0].split(" ").map(Number);
  let arr = input.slice(1).map((item) => item.split(" ").map(Number));
  let answer = 0;
  let graph = [];
  let MST = [];
  for (let i = 0; i < arr.length; i++) {
    let [a, b, edge] = arr[i];
    graph.push({ a, b, edge });
  }
  const find = (parent, x) => {
    if (parent[x] === x) {
      return x;
    }
    return (parent[x] = find(parent, parent[x]));
  };

  const union = (parent, a, b) => {
    const parentA = find(parent, a);
    const parentB = find(parent, b);

    if (parentA < parentB) {
      parent[parentB] = parentA;
    } else {
      parent[parentA] = parentB;
    }
  };
  graph.sort((a, b) => a.edge - b.edge);
  const parent = Array.from({ length: M + 1 }, (_, index) => index);
  for (let { a, b, edge } of graph) {
    if (find(parent, a) !== find(parent, b)) {
      union(parent, a, b);
      MST.push({ a, b, edge });
    }
  }
  // 나머지 길의 유지비의 합을 최소로 하기 위해 마지막 가중치를 제거한다.
  MST.pop();
  for (let i = 0; i < MST.length; i++) {
    answer += MST[i].edge;
  }
  console.log(answer);
});
