const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const nums = input[1].split(" ").map(Number);

let operators = input[2].split(" ").map(Number);

let max = -Infinity;
let min = Infinity;

let visited = new Array(4).fill(0); // 연산자 방문 기록

const dfs = (result, idx) => {
  if (idx === N) {
    max = Math.max(result, max);
    min = Math.min(result, min);
    return;
  }

  for (let i = 0; i < 4; i++) {
    if (visited[i] < operators[i]) {
      visited[i]++;
      switch (i) {
        case 0:
          dfs(result + nums[idx], idx + 1);
          break;
        case 1:
          dfs(result - nums[idx], idx + 1);
          break;
        case 2:
          dfs(result * nums[idx], idx + 1);
          break;
        case 3:
          if (result > 0) {
            dfs(Math.floor(result / nums[idx]), idx + 1);
          } else {
            dfs(Math.floor(Math.abs(result) / nums[idx]) * -1, idx + 1);
          }
          break;
      }
      visited[i]--;
    }
  }
};

dfs(nums[0], 1);

// 틀렷습니다의 이유! 0과 -0일때 예외 처리를 안해서!!!!....
// 0, -0은 boolean으로 False이므로 모두 0으로 바꿔주어야 함...
console.log(max ? max : 0);
console.log(min ? min : 0);
