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
  let M = Number(input[1]);
  let arr = input.slice(2).map((item) => item.split(" ").map(Number));
  let graph = [];

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
  let parent = Array.from({ length: M + 1 }, (_, index) => index);

  let answer = 0;
  for (let { a, b, edge } of graph) {
    if (find(parent, a) !== find(parent, b)) {
      union(parent, a, b);
      answer += edge;
    }
  }
  console.log(answer);
});
