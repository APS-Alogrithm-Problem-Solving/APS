#include <iostream>
#include <vector>
#include <queue>
#define MAX 300001
#define INF 987654321

using namespace std;

int dist[MAX] = {INF, };

int N; // 도시의 개수
int M; // 도로의 개수
int K; // 거리 정보
int X; // 출발 도시의 번호
vector<pair<int, int>> v[MAX]; // 도시, 도시

void dijkstra(int city) {
    priority_queue<pair<int, int>> pq; // 도시, 가중치

    // initialize
    pq.push(make_pair(0, city));
    dist[city] = 0;

    while(!pq.empty()) {
        int current_dist = -pq.top().first; // 우선순위 큐
        int current_city = pq.top().second;

        pq.pop();

        if(current_dist > dist[current_city]) continue;
        for(int i = 0; i < v[current_city].size(); i++) {
            int next_city = v[current_city][i].second;
            int next_dist = current_dist + v[current_city][i].first;

            if(next_dist < dist[next_city]){
                dist[next_city] = next_dist;
                pq.push(make_pair(-next_dist, next_city)); // 우선순위 큐
            }
        }
    }

}

int main() {
    // input 
    cin.tie(NULL);
    ios::sync_with_stdio(false);

    cin >> N >> M >> K >> X;

    fill_n(dist, N + 1, INF);

    for(int i = 0; i < M; i++) {
        int first, second;
        cin >> first >> second;
        
        v[first].push_back(make_pair(1, second)); // 가중치 1 
    }

   // dijkstra
   dijkstra(X); // start city

    // answer
   bool isAnswer = false;
    for(int i = 1; i <= N; i++) {
        if(dist[i] == K) {
            cout << i << "\n"; isAnswer = true;
        }
    }

    if(!isAnswer) cout << "-1";

    return 0;
}