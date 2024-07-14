const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let arr = input.slice(1).map((line) => line.split(" ").map(Number));
  let cnt = 0;

  function check(num, strike, ball) {
    let numArr = num.toString().split("").map(Number);
    let s = 0;
    let b = 0;

    for (let [qNum, qStrike, qBall] of arr) {
      let qArr = qNum.toString().split("").map(Number);
      let tempS = 0;
      let tempB = 0;

      for (let i = 0; i < 3; i++) {
        if (numArr[i] === qArr[i]) {
          tempS++;
        } else if (qArr.includes(numArr[i])) {
          tempB++;
        }
      }

      if (tempS !== qStrike || tempB !== qBall) {
        return false;
      }
    }

    return true;
  }

  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      for (let k = 1; k <= 9; k++) {
        if (i === j || j === k || k === i) continue;
        let num = i * 100 + j * 10 + k;
        if (check(num, 0, 0)) {
          cnt++;
        }
      }
    }
  }

  console.log(cnt);
});
