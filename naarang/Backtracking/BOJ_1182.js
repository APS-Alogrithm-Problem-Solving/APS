const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, S] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);
let answer = 0;

const dfs = (arr, idx) => {
  /* 
  이렇게 합을 중간에 찾는게 문제였음! 계속 틀렸습니다가 뜨는데 모두 탐색한 이후에 검사해야했다! 중간에 하면 안됐다!
  const sum = arr.reduce((a, b) => a + b, 0);
  if (arr.length > 0 && sum === S) {
    answer++;
    return;
  }

  if (idx === N) return;
  idx가 N에 도달했을 때 탐색 종료
  */
  if (idx === N) {
    // 부분 집합의 합이 S와 같은 경우 카운트 증가
    if (arr.length > 0 && arr.reduce((a, b) => a + b, 0) === S) {
      answer++;
    }
    return;
  }

  /*
  이렇게 반복문으로 찾는게 문제였음! -> 특정 숫자를 선택 함 or 안 함으로 풀기
  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      dfs([...arr, nums[i]]);
      visited[i] = false;
    }
  }
  */
  // 또한 이렇게 찾으면 nums 배열을 순서대로 탐색하므로 중복이 없어서 set 객체를 사용할 필요 없음
  dfs([...arr], idx + 1); // 해당 숫자 선택
  dfs([...arr, nums[idx]], idx + 1); // 해당 숫자 선택 안 함
};

dfs([], 0);
console.log(answer);

// 계속 시간 초과나네..ㅠㅠㅠㅠ
