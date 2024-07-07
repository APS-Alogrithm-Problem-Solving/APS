#include <iostream>
#include <queue>

using namespace std;

int F; // 건물의 층수
int G; // 스타트링크가 있는 곳, 목적지
int S; // 현재 위치
int U; // 올라가는 층 수 
int D; // 내려가는 층 수

queue<pair<int, int>> q; // 현재 층 수, 현재까지 누른 버튼의 수
bool visited[10000001];

int main() {
    // input
    cin >> F >> S >> G >> U >> D;

    // bfs
    visited[S] = true;
    q.push(make_pair(S, 0));

    while(!q.empty()) {
        int floor = q.front().first;
        int cnt = q.front().second;

        q.pop();

        // stop condition
        if(floor == G) {
            cout << cnt;
            return 0;
        }

        if(floor + U <= F && !visited[floor + U]) {
            visited[floor + U] = true;
            q.push(make_pair(floor + U, cnt + 1));
        
        }
        if(floor - D >= 1 && !visited[floor - D]) {
             visited[floor - D] = true;
            q.push(make_pair(floor - D, cnt + 1));
        }

        /**
         * 처음에 목적지 층과의 차이가 무조건 줄어드는 방향으로만 접근해야한다고 생각했는데,
         * 9층에서 12층으로 갔다가 한 층씩 내려오는 케이스도 있음!
        */
        // // up
        // if(floor + U - G <= floor - G) {
        //     q.push(make_pair(floor + U, cnt + 1));
        // }

        // // down
        // if(floor - D - G <= floor - G) {
        //     q.push(make_pair(floor - D, cnt + 1));
        // }
    }

    cout << "use the stairs";
    return 0;
}