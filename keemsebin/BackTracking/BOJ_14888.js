const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = Number(input[0]);
  const numbers = input[1].split(" ").map(Number);
  const operators = input[2].split(" ").map(Number);
  let max = -Infinity;
  let min = Infinity;

  const dfs = (cnt, result, add, sub, mul, div) => {
    if (cnt === N) {
      min = Math.min(min, result);
      max = Math.max(max, result);
    }
    if (add > 0) {
      dfs(cnt + 1, result + numbers[cnt], add - 1, sub, mul, div);
    }
    if (sub > 0) {
      dfs(cnt + 1, result - numbers[cnt], add, sub - 1, mul, div);
    }
    if (mul > 0) {
      dfs(cnt + 1, result * numbers[cnt], add, sub, mul - 1, div);
    }
    if (div > 0) {
      // 몫만 취해야 하기 때문에 parseInt 사용
      dfs(cnt + 1, parseInt(result / numbers[cnt]), add, sub, mul, div - 1);
    }
  };
  dfs(1, numbers[0], operators[0], operators[1], operators[2], operators[3]);

  console.log(max ? max : 0);
  console.log(min ? min : 0);
});
