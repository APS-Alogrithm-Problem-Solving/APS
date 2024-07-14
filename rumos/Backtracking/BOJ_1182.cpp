#include <iostream>

using namespace std;

int N, S;
int answer = 0;
int arr[21];

void backtracking(int idx, int sum) {
    if(idx == N) return;
    if(sum + arr[idx] == S) answer++;

    backtracking(idx + 1, sum); // 다음 부분수열
    backtracking(idx + 1, sum + arr[idx]); // 현재까지를 포함한 다음 부분수열
}

int main() {
    // input
    cin >> N >> S;
    for(int i = 0; i < N; i++) {
        cin >> arr[i];
    }

    backtracking(0, 0); // index, cnt

    cout << answer;

    return 0;
    
}