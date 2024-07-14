const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let N = Number(input[0]);
  let arr = input[1];

  // 연산자를 기준으로 분리
  let numbers = [];
  let operators = [];
  for (let i = 0; i < N; i++) {
    if (i % 2 === 0) {
      numbers.push(Number(arr[i]));
    } else {
      operators.push(arr[i]);
    }
  }

  const calculate = (a, b, op) => {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
    }
  };

  const dfs = (index, currentSum) => {
    // 모든 배열을 순회 했을 경우 최대값 계산
    if (index === numbers.length - 1) {
      max = Math.max(max, currentSum);
      return;
    }

    // 현재 연산자를 사용하여 계산
    let nextSum = calculate(currentSum, numbers[index + 1], operators[index]);
    dfs(index + 1, nextSum);
    // 괄호를 포함한 연산 처리
    if (index + 1 < operators.length) {
      let nextNextSum = calculate(
        numbers[index + 1],
        numbers[index + 2],
        operators[index + 1]
      );

      nextSum = calculate(currentSum, nextNextSum, operators[index]);
      dfs(index + 2, nextSum);
    }
  };

  let max = -Infinity;
  dfs(0, numbers[0]);

  console.log(max);
});
