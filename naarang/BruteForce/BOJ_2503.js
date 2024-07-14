const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

// 각 자리수로 판단하지 말고 전체 가능한 값으로 판단해야 할듯! -> "123" 문자열로 저장하기
// 중복돼면 안되므로 set 사용하기
let answer = new Set();

// 가능한 모든 개수 탐색
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    for (let k = 1; k <= 9; k++) {
      // 세 수가 모두 다를 때
      if (i !== j && i !== k && j !== k) {
        let flag = true;
        const find_num = i.toString() + j.toString() + k.toString();

        for (let x of input) {
          const [num, strike, ball] = x.split(" ");
          let s = 0;
          let b = 0;

          // 맞는지 계산
          for (let i = 0; i < 3; i++) {
            if (find_num[i] === num[i]) {
              // strike
              s++;
            } else if (
              find_num[i] === num[(i + 1) % 3] ||
              find_num[i] === num[(i + 2) % 3]
            ) {
              // ball
              b++;
            }
          }

          if (s !== Number(strike) || b !== Number(ball)) {
            flag = false;
            break;
          }
        }
        if (flag) {
          answer.add(find_num);
        }
      }
    }
  }
}

console.log(answer.size);

// 난 오히려 이 문제는 진짜 감도 안왔다ㅠㅠ
// point ) 1. 직접 모든 경우의 수를 돌면서 2. ball이랑 strike 카운팅해보고 일치하는지 확인하기!

// 이거 백트래킹으로도 푼 문제 있는데 한 번 보기
// https://kimbangg.tistory.com/214
