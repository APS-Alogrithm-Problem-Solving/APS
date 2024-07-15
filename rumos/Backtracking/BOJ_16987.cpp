#include <iostream>
#include <vector>

using namespace std;

int N;
int answer = -1;
vector<pair<int, int>> egg;

void hits(int x) {
    //cout << "\t" << x << "\n";
    // stop condition
    if(x >= N) {
        int ans = 0;
        for(int i = 0; i < N; i++) { if(egg[i].first <= 0) ans++; }

        if(answer < ans) answer = ans;
        return;
    }

    // 손에 든 계란이 깨지면 치지 않고 넘어감
    if(egg[x].first <= 0) hits(x + 1); 
    else {
        // 계란 x로 깨지지 않은 계란 중 하나 치기
        bool check = false;
        for(int i = 0; i < N; i++) {
            if(egg[i].first > 0 && i != x) { // 깨지지 않은 다른 계란을 쳐야 함
                egg[i].first -= egg[x].second;
                egg[x].first -= egg[i].second;
                check = true;
                hits(x + 1);
                egg[i].first += egg[x].second;
                egg[x].first += egg[i].second;                
            } 
        }

        // 본인 제외 깨짐 -> answer 확인
        if(!check) hits(N);
    }

    
}

int main() {
    // input
    cin >> N; 
    for(int i = 0; i < N; i++) {
        int s, w;
        cin >> s >> w;
        egg.push_back(make_pair(s, w));
    }

    // egg hits egg
    hits(0);

    cout << answer;

    return 0;

}