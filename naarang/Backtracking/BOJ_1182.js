const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, S] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);

let set = new Set(); // 중복 제거를 위해 "1 3 4" 형태로 저장
let visited = new Array(N).fill(false);

const dfs = (arr) => {
  console.log(arr);
  // 합 구하기
  const sum = arr.reduce((a, b) => a + b, 0);
  if (arr.length > 0 && sum === S) {
    set.add(arr.sort().join(" "));
    return;
  }

  // S값이 음수일 때를 고려해서 시간 초과 해결
  if (S >= 0) {
    if (sum > S || arr.length >= N) {
      return;
    }
  } else {
    if (sum < S || arr.length >= N) {
      return;
    }
  }

  // 이렇게 반복문으로 찾는게 문제였음! -> 특정 숫자를 선택 함 or 안 함으로 풀기
  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      dfs([...arr, nums[i]]);
      visited[i] = false;
    }
  }
};

dfs([]);
console.log(set.size);

// 계속 시간 초과나네..ㅠㅠㅠㅠ
