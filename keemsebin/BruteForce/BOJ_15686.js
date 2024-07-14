const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [N, M] = input[0].split(" ").map(Number);
  let arr = input.slice(1).map((line) => line.split(" ").map(Number));
  let home = [];
  let chicken = [];
  let ans = Infinity;
  let check = Array(chicken.length).fill(false);
  // 1. 2의 위치를 저장
  // 2. M개의 조합을 만들어주기
  // 3. 부분집합별 치킨거리 계산
  // 4. 최솟값 계산

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i][j] === 2) {
        chicken.push([i, j]);
      } else if (arr[i][j] === 1) {
        home.push([i, j]);
      }
    }
  }
  // 치킨거리 계산
  const getDistance = (selectedChicken) => {
    let sum = 0;
    for (let [hx, hy] of home) {
      let min = Infinity;
      for (let [cx, cy] of selectedChicken) {
        min = Math.min(min, Math.abs(hx - cx) + Math.abs(hy - cy));
      }
      sum += min;
    }
    return sum;
  };

  // 부분집합 만들어주기
  const dfs = (index, selectedChicken) => {
    if (selectedChicken.length === M) {
      ans = Math.min(ans, getDistance(selectedChicken));
      return;
    } else {
      // index는 현재 탐색 중인 치킨집
      // cnt == M이 같아 질 때까지 재귀
      for (let i = index; i < chicken.length; i++) {
        if (check[i]) continue;
        selectedChicken.push(chicken[i]);
        check[i] = true;
        dfs(i, selectedChicken);
        check[i] = false;
        selectedChicken.pop();
      }
    }
  };

  dfs(0, []);
  console.log(ans);
});
