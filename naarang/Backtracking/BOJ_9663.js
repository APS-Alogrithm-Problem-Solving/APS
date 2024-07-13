const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
let queens = new Array(N).fill(0); // index - 행, value - 열

// 방문 여부 체크 함수
const checkBoard = (x) => {
  // 지금 탐색하는 행의 이전 행들의 퀸이랑 열이 같은지, 대각선인지 비교
  for (let i = 0; i < x; i++) {
    if (
      queens[i] === queens[x] ||
      Math.abs(i - x) === Math.abs(queens[i] - queens[x])
    ) {
      return false;
    }
  }
  return true;
};

let answer = 0;
const dfs = (x) => {
  if (x === N) {
    answer++;
    return;
  }

  for (let i = 0; i < N; i++) {
    queens[x] = i;
    if (checkBoard(x)) {
      // 현재 행에서 퀸을 놓을 수 있는 곳에 놓기
      dfs(x + 1);
    }
  }
};

dfs(0);

console.log(answer);

// 퀸은 ! 좌우상하대각선 모든 방향으로 원하는 만큼 이동 가능함

// N X N으로 2차원 배열로 하니 시간 초과...
// 퀸은 서로 다른 행과 열에 위치해야하므로 1차원 배열로 체크 가능!!
