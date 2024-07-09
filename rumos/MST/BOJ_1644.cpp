#include <iostream>
#include <vector>

#define MAX 4000001

using namespace std;

int N; 
vector<int> prime;
int answer = 0;

int main() {
    // input 
    cin >> N;

    /**
     * 첫 풀이 후, 제출했더니 97%에서 Segmentation fault 발생
     * 문제의 조건을 다시 확인해보니, N이 1부터여서 prime을 찾을 수 없음!
     * N이 1인 경우는 따로 처리했음
    */
    if(N == 1) {
        cout << 0; exit(0);
    }

    // 에라토스테네스의 체 : 소수 판별 알고리즘
    vector<bool> isPrime(N + 1, true);
    for(int i = 2; i * i <= N; i++) {
        if(!isPrime[i]) continue;
        for(int j = i + i; j <= N; j += i) isPrime[j] = false;          
    }

    // prime
    for(int i = 2; i <= N; i++) {
        if(isPrime[i]) {prime.push_back(i);}
    }

    // two pointer
    int low = 0;
    int high = 0;
    int max_index = prime.size();
    long long sum = prime[0];

    while(low < max_index && high < max_index) {
        // case 1
        if(sum < N) {          
            if(high >= max_index) break;
            high++;
            sum += prime[high];
        }

        // case 2
        else if(sum > N) {
            sum -= prime[low];
            low++;
        }

        // case 3
        else if(sum == N) {
            answer++;
            high++;
            if(high < max_index) sum += prime[high];         
        }
    }

    cout << answer;

    return 0;
}