#include <iostream>
#include <algorithm>

using namespace std;

int N;
string S;
int answer =  -987654321;

int calculate(int a, int b, char op) {
    switch(op) {
        case '+' : a += b; break;
        case '-' : a-= b; break;
        case '*' : a *= b; break;
    }

    return a;
}

void dfs(int index, int result) {
    // stop condition
    if(index > N - 1) {
        answer = max(answer, result);
        return;
    }

    char op = (index == 0) ? '+' : S[index - 1];

    // 괄호로 묶기
    if(index + 2 < N) {
        /**
         * 괄호 안에 2개의 숫자만 가능
        */
        int next = calculate(S[index] - '0', S[index + 2] - '0', S[index + 1]); // a + b이면 a, b, +
        dfs(index + 4, calculate(result, next, op));
    }

    // 괄호로 묶지 않고, 다음 연산자를 괄호 시작으로 정함
    dfs(index + 2, calculate(result, S[index] - '0', op));
}

int main() {
    // input
    cin >> N >> S;

    dfs(0, 0); // 현재 인덱스, 현재까지 계산 결과

    cout << answer;

    return 0;
}