const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let S = input[0];
let T = input[1].split("");

let answer = 0;

const findString = (arr) => {
  if (arr.length <= S.length) {
    if (arr.join("") === S) answer = 1;
    return;
  }

  if (arr[arr.length - 1] === "A") {
    let newArr = [...arr];
    newArr.pop();
    // 1번 규칙 사용
    findString(newArr);
  }

  if (arr[0] === "B") {
    // 2번 규칙 사용
    let newArr = [...arr];
    newArr.reverse();
    newArr.pop();
    findString(newArr);
  }
};

findString(T);
console.log(answer);

// 시간초과... 어떻게 해결하지..?ㅠ
// S -> T 가 아니라 T -> S 가 더 쉽고 경우의 수가 적다!  (거꾸로 가는 걸 생각하는 게 어려웠다!)
// https://ggarden.tistory.com/entry/%EB%B0%B1%EC%A4%80-12919-A%EC%99%80-B-2-JavaScript
