const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);

// 이거 체크하는게 너무 어려운데ㅠ
const checkStr = (str) => {
  let len = 1; // 검사할 수열의 길이
  for (let end = str.length - 1; end >= Math.ceil(str.length / 2); end--) {
    let left = str.substr(end - len, len);
    let right = str.substr(end, len);
    if (left === right) {
      return false;
    }
    len++;
  }
  return true;
};

let answer;
let finish = false;
// 가장 작은 수를 뽑는게 포인트!
const recursion = (str) => {
  console.log(str);
  if (finish) return; // 1개를 찾으면 이후꺼는 모두 stop -> 시간 초과 해결
  if (str.length === N) {
    answer = str; // 이거를 처음에 Number(str)로 문자열 -> 숫자로 바꿨더니 특정 자리 이후에 0으로 표시됨...(숫자 크기가 너무 커서!) 그냥 문자열로 출력!
    finish = true;
    return;
  }

  for (let i = 1; i <= 3; i++) {
    if (checkStr(str + `${i}`)) {
      recursion(str + `${i}`);
    }
  }
};

recursion("");

console.log(answer);

// 시간 초과.... 이게 가장 먼저 발견한 1개가 가장 작은 수이므로 이후꺼는 찾을 필요 없다!
