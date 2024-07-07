#include <iostream>

using namespace std;

/**
 * 비행 스케줄 : 항상 연결 그래프
 * 모든 국가를 여행하기 위해 타야하는 비행기 종류의 최소 개수 -> 모든 정점을 가장 적은 수의 간선으로 연결
 * => MST! 간선의 개수 = 정점의 개수 -1
*/
 
int main() {
    int T;
    cin >> T;
 
    while (T--) {
        int N, M;
        cin >> N >> M;
 
        int a, b;
        while (M--) {
            cin >> a >> b;
        }
 
        cout << N - 1 << endl;
    }
 
}