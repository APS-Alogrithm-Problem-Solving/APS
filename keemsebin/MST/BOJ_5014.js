const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // F는 총 층수
  // S는 현재 층수
  // G는 목적지
  // U는 U만큼 위로
  // D는 D만큼 아래로
  let [F, S, G, U, D] = input[0].split(" ").map(Number);
  let isVisited = Array(F + 1).fill(false);
  let count = Array(F + 1).fill(0);
  let queue = [];
  queue.push(S);
  isVisited[S] = true;

  while (queue.length > 0) {
    let cur = queue.shift();
    if (cur === G) {
      console.log(count[cur]);
      return;
    }

    if (cur + U <= F && !isVisited[cur + U]) {
      queue.push(cur + U);
      isVisited[cur + U] = true;
      count[cur + U] = count[cur] + 1;
    } else if (cur - D >= 1 && !isVisited[cur - D]) {
      queue.push(cur - D);
      isVisited[cur - D] = true;
      count[cur - D] = count[cur] + 1;
    }
  }
  console.log("use the stairs");
});
