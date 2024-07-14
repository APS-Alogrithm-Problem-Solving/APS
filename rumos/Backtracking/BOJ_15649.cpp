#include <iostream>

using namespace std;

int N, M;
int visited[9]; 
int arr[9];

void backtracking(int cnt) {
    // stop condition
    if(cnt == M) {
        for(int i = 0; i < M; i++) {
            cout << arr[i] << " ";
        }
        cout << "\n"; return;
    }

    for(int i = 1; i <= N; i++) {
        if(visited[i] != 1) {
            visited[i] = 1;
            arr[cnt] = i;
            backtracking(cnt + 1);
            visited[i] = 0;
        }
    }
}

int main() {

    // input
    cin >> N >> M;

    // backtracking
    backtracking(0);

}