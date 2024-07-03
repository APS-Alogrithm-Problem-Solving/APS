const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

const findParents = (parents, node) => {
  if (parents[node] === node) return node;

  return (parents[node] = findParents(parents, parents[node]));
};

const unionParents = (parents, start, end) => {
  let p1 = findParents(parents, start);
  let p2 = findParents(parents, end);

  if (p1 < p2) return (parents[p2] = p1);
  else return (parents[p1] = p2);
};

const equalParents = (parents, start, end) => {
  let p1 = findParents(parents, start);
  let p2 = findParents(parents, end);

  if (p1 === p2) {
    return true;
  } else {
    return false;
  }
};

let readLine = 0;
let answer = [];
while (true) {
  let [m, n] = input[readLine++].split(" ").map(Number);
  if (m === 0 && n === 0) {
    break;
  }

  let roads = [];
  let totalCost = 0;
  for (let i = 0; i < n; i++) {
    let road = input[readLine++].split(" ").map(Number);
    roads.push(road);
    totalCost += road[2];
  }
  // 가중치 오름차순 정렬
  roads.sort((a, b) => a[2] - b[2]);
  let parents = Array.from({ length: m }, (v, i) => i);
  let result = 0;
  for (let road of roads) {
    let [start, end, cost] = road;

    if (!equalParents(parents, start, end)) {
      result += cost;
      unionParents(parents, start, end);
    }
  }

  // 절약할 수 있는 최대 비용을 구해야하는 건데... 그냥 최소 비용을 출력함ㅠ
  answer.push(totalCost - result);
}

console.log(answer.join("\n"));
