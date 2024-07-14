const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const city = Array.from({ length: N }, (v, i) =>
  input[i].split(" ").map(Number)
);

// 도시에서 집과 치킨집의 좌표를 따로 저장하기
let home = []; // 일단 집 좌표 넣기
let chicken = []; // 일단 치킨집 좌표 넣기
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (city[i][j] === 1) {
      home.push([i, j]);
    } else if (city[i][j] === 2) {
      chicken.push([i, j]);
    }
  }
}

// 조합 알고리즘으로 치킨집 중에서 M개의 치킨집만 고르기
const getCombinations = (arr, selectNum) => {
  if (selectNum === 1) {
    return arr.map((value) => [value]);
  }

  let result = [];
  arr.forEach((value, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNum - 1);
    const attached = combinations.map((combination) => [value, ...combination]);
    result.push(...attached);
  });

  return result;
};

let chickenCase = getCombinations(chicken, M);

// 치킨집을 M개 고르는 경우마다 도시의 치킨 거리를 구하기 (최소값이 정답)
let answer = Infinity;
chickenCase.forEach((chickenValue) => {
  let result = 0;
  home.forEach((homeLoc) => {
    let distance = Infinity;
    chickenValue.forEach((chickenLoc) => {
      distance = Math.min(
        distance,
        Math.abs(chickenLoc[0] + 1 - (homeLoc[0] + 1)) +
          Math.abs(chickenLoc[1] + 1 - (homeLoc[1] + 1))
      );
    });
    result += distance;
  });

  answer = Math.min(answer, result);
});

console.log(answer);

// 시간 초과일 줄 알았는데 N(2 ≤ N ≤ 50)과 M(1 ≤ M ≤ 13) 이므로 완전탐색이 가능했다!
