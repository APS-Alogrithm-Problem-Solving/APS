const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

const [F, S, G, U, D] = input[0].split(" ").map(Number);

// 같은 경우를 고려 안해줘서 틀렸다!
if (S === G) {
  console.log(0);
  return;
}

let visited = new Array(1 + F).fill(0);
let answer = 0;
const BFS = () => {
  let start = S;
  let queue = [];

  queue.push(start);
  visited[S] = 1;

  while (queue.length > 0) {
    let floor = queue.shift();

    if (floor === G) {
      answer = visited[floor] - 1;
      return;
    }

    let up = floor + U;
    if (up >= 1 && up <= F && !visited[up]) {
      visited[up] = visited[floor] + 1;
      queue.push(up);
    }
    let down = floor - D;
    if (down >= 1 && down <= F && !visited[down]) {
      visited[down] = visited[floor] + 1;
      queue.push(down);
    }
  }
};

BFS();
console.log(answer > 0 ? answer : "use the stairs");

// 근데 한 번 방문한 층부터 최소한의 경우는 같을 것이므로 이미 방문한 곳을 방문하지 않도록 하려면 BFS가 나을듯?
