#include <iostream>
#include <algorithm>

using namespace std;

int N;
int dp[50001];

int main() {

    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);

    // input
    cin >> N;

    dp[1] = 1;

    for(int i = 1; i <= N; i++) {
        dp[i] = dp[1] + dp[i - 1];

        /**
         * dp[10]의 가능한 케이스 : dp[1] + dp[9] / dp[4] + dp[6] / ... / 중 작은 값 고르기
        */
        for(int j = 2; j * j <= i; j++) {
            dp[i] = min(dp[i], 1 + dp[i - j * j]);
        }
    }

    cout << dp[N];

    return 0;

}