const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M, K, X] = input[0].split(" ").map(Number);
let road = Array.from({ length: N + 1 }, () => []);
// let road = new Array(N + 1).fill([]); 이렇게 하니까 다 같은 배열을 참조하는 문제 발생

for (let i = 1; i <= M; i++) {
  let [start, end] = input[i].split(" ").map(Number);
  road[start].push(end);
}

let answer = [];
const BFS = (startNode) => {
  let visited = new Array(N + 1).fill(0); // depth도 같이 기록!
  let queue = [];

  queue.push(startNode);
  visited[startNode] = 1;

  while (queue.length > 0) {
    const node = queue.shift();

    for (let next of road[node]) {
      if (visited[next] === 0) {
        visited[next] = visited[node] + 1;
        if (visited[next] === K + 1) {
          // 거리가 K이면
          answer.push(next);
        } else {
          // 아니면 더 탐색
          queue.push(next);
        }
      }
    }
  }
};

BFS(X);
console.log(answer.length > 0 ? answer.sort((a, b) => a - b).join("\n") : -1);

// 이건.. BFS가 더 낫지 않나..?
// depth 값을 저장하는 방법 -> visited에 값 기록하기
