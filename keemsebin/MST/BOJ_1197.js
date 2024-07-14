const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [V, E] = input[0].split(" ").map(Number);
  let answer = 0;
  let graph = [];
  let arr = input.slice(1).map((item) => item.split(" ").map(Number));
  for (let i = 0; i < arr.length; i++) {
    let [a, b, edge] = arr[i];
    graph.push({ a, b, edge });
  }
  // 최소한의 가중치로 모든 간선을 연결하기 위해 크루스칼 알고리즘을 사용한다.
  // 간선들을 오름차순으로 정렬시킨 뒤, 사이클을 형성하지 않는 선에서 정렬된 순서대로 간선을 선택한다.
  // 사이클을 판단하기 위해서는 union & find를 사용한다. (부모가 동일하면 union 연산을 진행하지 않는다. 사이클이 생기기 때문에)
  // 서로 다른 두 집합을 병합하는 union과 집합의 원소가 어떤 집합에 속해있는지 확인하기 위한 find 연산을 해준다.

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
  const parent = Array.from({ length: V + 1 }, (_, index) => index);
  for (let { a, b, edge } of graph) {
    if (find(parent, a) !== find(parent, b)) {
      union(parent, a, b);
      answer += edge;
    }
  }
  console.log(answer);
});
