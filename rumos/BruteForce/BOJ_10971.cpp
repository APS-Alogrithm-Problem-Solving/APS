#include <iostream>

using namespace std;

int N;
int arr[10][10];
bool city[10] = {false, };
int answer = 987654321;

/**
 * N개의 도시를 모두 거쳐 다시 원래의 도시로 돌아와야 함
*/

void backtracking(int start_node, int current_node, int cnt, int cost) {
    // stop condition
    if(cnt == N) {
        if(arr[current_node][start_node] == 0) return; // 다시 돌아갈 수 없을 때
        if(answer > cost + arr[current_node][start_node]) answer = cost + arr[current_node][start_node]; 
        return;
    }

    // next city
    for(int i = 0; i < N; i++) {
        if(city[i] || arr[current_node][i] == 0) continue; // 방문 했거나 길이 없음
        city[i] = true;
        backtracking(start_node, i, cnt + 1, cost + arr[current_node][i]);
        city[i] = false; 
    }
}

int main() {
    // input
    ios_base::sync_with_stdio(0); cin.tie(0); cout.tie(0);
    cin >> N;

    for(int i = 0; i < N; i++) {
        for(int j = 0; j < N; j++) {
            cin >> arr[i][j];
        }
    }

    // TSP
    for(int i = 0; i < N; i++) {
        city[i] = true;
        backtracking(i, i, 1, 0); // 출발지, 현재 위치, 거쳐간 마을 수, 비용
        city[i] = false;
    }

    cout << answer;

    return 0;
}