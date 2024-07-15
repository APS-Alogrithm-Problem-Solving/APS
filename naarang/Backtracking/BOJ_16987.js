const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let N = Number(input[0]);
let durability = [];
let weight = [];
for (let i = 1; i <= N; i++) {
  const [d, w] = input[i].split(" ").map(Number);
  durability.push(d);
  weight.push(w);
}

let answer = 0;

const recursion = (egg, info) => {
  //console.log(egg, info);
  if (egg === N) {
    let result = 0;
    info.forEach((value) => {
      if (value <= 0) result++;
    });
    answer = Math.max(answer, result);
    return;
  }

  if (info[egg] <= 0) {
    // 손에 든 계란이 깨짐
    recursion(egg + 1, [...info]);
  } else {
    let isBroken = false;
    for (let i = 0; i < N; i++) {
      if (egg !== i && info[i] > 0) {
        isBroken = true;
        let new_info = [...info];
        new_info[egg] -= weight[i];
        new_info[i] -= weight[egg];
        recursion(egg + 1, new_info);
      }
    }
    // 깨지지 않은 다른 계란이 없으면
    if (!isBroken) {
      recursion(egg + 1, [...info]);
    }
  }
};

recursion(0, durability);
console.log(answer);
