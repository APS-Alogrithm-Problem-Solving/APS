const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let num = Number(input);

let dp = Array.from({ length: num + 1 }, () => 0);

dp[1] = 1;
dp[2] = 2;

for (let i = 3; i < num + 1; i++) {
  const sqrtNum = Math.sqrt(i);
  if (sqrtNum % 1 === 0) {
    dp[i] = 1;
    continue;
  }

  // 최소 개수 계산
  let min = 4;
  for (let j = Math.floor(sqrtNum); j >= 1; j--) {
    // i보다 작은 제곱근들을 탐색 = j
    // j * j + ? = i 이므로 dp[i] = 1 + dp[i - j * j]로 개수를 구할 수 있음
    min = Math.min(min, 1 + dp[i - Math.pow(j, 2)]);
  }
  dp[i] = min;
}

console.log(dp[num]);

// 다이나믹 프로그래밍만 생각남...
// 브루트포스는 시간 0.5가 걸리니까..

// 제곱근 구하기 Math.sqrt()
// 제곱하기 Math.pow()

// 정수 vs 실수 판별법 : 숫자 % 1 === 0 인지 확인
