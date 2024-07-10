const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

let answer = []; // "123" 형태로 저장
let visited = new Array(N + 1).fill(false);

const dfs = (arr) => {
  if (arr.length === M) {
    answer.push(arr);
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      dfs(arr + `${i}`);
      visited[i] = false;
    }
  }
};

dfs("");
console.log(
  answer
    .sort()
    .map((value) => value.split("").join(" "))
    .join("\n")
);
