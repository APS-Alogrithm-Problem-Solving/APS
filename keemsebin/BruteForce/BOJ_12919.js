const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let S = input[0];
  let T = input[1];

  function canTransform(S, T) {
    let queue = [T];

    while (queue.length > 0) {
      let current = queue.shift();

      if (current === S) {
        return true;
      }

      if (current.length < S.length) {
        continue;
      }

      if (current.endsWith("A")) {
        queue.push(current.slice(0, -1));
      }

      if (current.startsWith("B")) {
        let reversed = current.slice(1).split("").reverse().join("");
        queue.push(reversed);
      }
    }

    return false;
  }

  if (canTransform(S, T)) {
    console.log(1);
  } else {
    console.log(0);
  }
});
