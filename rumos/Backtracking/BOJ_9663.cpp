#include <iostream>

using namespace std;

int N;
int chess[16];
int answer = 0;

void backtracking(int x) {
    // stop condition
    if(x == N) {
        answer++;
        return;
    }

    for(int i = 0; i < N; i++) {
        chess[x] = i; // 퀸의 위치
        bool go = true;
        for(int j = 0; j < x; j++) {
            if(chess[x] == chess[j] || abs(chess[x] - chess[j]) == x - j) {
                // 같은 행 or 대각선 위치 -> 충돌!
                go = false; break;
            }
        }

        if(go) backtracking(x + 1);
    }
    
}

int main() {
    // input
    cin >> N;

    backtracking(0);

    return 0;

}