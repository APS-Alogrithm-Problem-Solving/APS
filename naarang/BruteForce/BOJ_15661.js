const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
let scoreArr = Array.from({ length: N }, (v, i) =>
  input[i].split(" ").map(Number)
);

let visited = new Array(N).fill(false);
let answer = Infinity;

const checkScore = () => {
  let start = 0;
  let link = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (visited[i] && visited[j]) {
        // 같이 속하면 더하기
        start += scoreArr[i][j];
      } else if (!visited[i] && !visited[j]) {
        link += scoreArr[i][j]; // 같이 속하면 더하기
      }
    }
  }
  answer = Math.min(answer, Math.abs(start - link));
};

// 팀원을 선택하거나 선택하지 않는 모든 가능한 경우를 재귀적으로 탐색
const findTeam = (member) => {
  if (member === N) {
    // 전체 인원이 모두 팀에 할당되었다면!
    checkScore();
    return;
  }
  // start 팀에 속하는 경우
  visited[member] = true;
  findTeam(member + 1);

  // link 팀에 속하는 경우
  visited[member] = false;
  findTeam(member + 1);
};

findTeam(0);
console.log(answer);

// 이 문제는 정말 감이 안왔음... 스스로 푼게 아니다ㅠ
// https://liltdevs.tistory.com/64
