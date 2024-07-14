const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let cur = 1;
  let test = [];
  let T = Number(input[0]);
  let arr = input.slice(1);

  for (let i = 0; i < T; i++) {
    const [N, M] = input[cur++].split(" ").map(Number);
    let flights = [];
    let count = 0;
    for (let j = 0; j < M; j++) {
      const [a, b] = input[cur++].split(" ").map(Number);
      flights.push([a, b]);
    }

    // 해결. 국가의 수가 결국 N = 국가(node), N-1 = 국가간 연결(edge)
    // edge만큼 이동을 해야한다.
    test.push(N - 1);
  }
  console.log(test.join("\n"));
});
