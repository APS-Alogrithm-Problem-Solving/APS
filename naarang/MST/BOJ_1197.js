const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

const [V, E] = input.shift().split(" ").map(Number);

// union-find 알고리즘
let parent = Array.from({ length: V + 1 }, (v, i) => i);

// 노드가 가리키는 최상위 부모를 찾기
const getParent = (node) => {
  if (parent[node] === node) return node;
  return getParent(parent[node]);
};

// 두 노드의 부모 노드 중에서 작은 값을 가지는 부모를 기준으로 합치기
const unionParent = (node1, node2) => {
  const parent1 = getParent(node1);
  const parent2 = getParent(node2);

  if (parent1 < parent2) return (parent[parent2] = parent1);
  else return (parent[parent1] = parent2);
};

// 두 노드의 부모가 같은지 확인
const findParent = (node1, node2) => {
  const parent1 = getParent(node1);
  const parent2 = getParent(node2);

  if (parent1 === parent2) return true;
  else return false;
};

// 간선들을 가중치를 오름차순으로 정렬
let edges = [];
input.forEach((value) => edges.push(value.split(" ").map(Number)));
edges.sort((a, b) => a[2] - b[2]);

let answer = 0;
for (let edge of edges) {
  const [start, end, cost] = edge;
  if (!findParent(start, end)) {
    answer += cost;
    unionParent(start, end);
  }
}

console.log(answer);
