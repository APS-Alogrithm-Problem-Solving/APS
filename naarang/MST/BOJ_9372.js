const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let readLine = 0;
const T = Number(input[readLine++]);
let answer = [];

for (let i = 0; i < T; i++) {
  const [N, M] = input[readLine++].split(" ").map(Number);
  let plane = [];
  for (let i = 0; i < M; i++) {
    let [c1, c2] = input[readLine++].split(" ").map(Number);
    plane.push([c1, c2]);
  }

  answer.push(N - 1);
}

console.log(answer.join("\n"));

// 그냥... 가중치도 없구 비행기 종류 개수라서 N-1이네..
