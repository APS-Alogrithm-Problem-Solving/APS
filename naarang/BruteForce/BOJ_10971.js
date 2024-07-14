const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let N = Number(input.shift());
let cost = Array.from({ length: N }, (v, i) => input[i].split(" ").map(Number)); // i에서 j로 가기 위한 비용
let visited = new Array(N).fill(false); // 1~N번 도시 방문 여부 체크
let answer = Infinity;

const DFS = (depth, start, currentCost) => {
  if (depth === N && cost[start][0] > 0) {
    // 다시 처음 시작 노드도 돌아와야 함
    answer = Math.min(answer, currentCost + cost[start][0]);
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!visited[i] && cost[start][i] > 0) {
      visited[i] = true;
      DFS(depth + 1, i, currentCost + cost[start][i]);
      visited[i] = false;
    }
  }
};

visited[0] = true;
DFS(1, 0, 0);

console.log(answer);

// 이 문제는 비용이 있는 최적의 순환 경로 -> DFS! (depth를 통해 최적을 찾기)
// 모든 시작 점부터 DFS를 호출해봐야되나 했는데 알고보니 어차피 어느 도시에서 출발해도 한 바퀴 순회하는 것이므로 출발 위치는 어디든 상관없다!
