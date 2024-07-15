#include <iostream>
#include <algorithm>
#include <vector>
#define MAX 1000000001

using namespace std;

int N; // 2 이상 11 이하
int input[11] = {0, }; // 들어오는 숫자 저장, 오름차순 아닐 수 있음
vector<int> v; // 연산자

int ans_max = -1 * MAX;
int ans_min = MAX;

int main() {
    // input
    cin >> N;
    for(int i = 0; i < N; i++) {
        cin >> input[i];
    }

    // 연산자 개수
    int plus, minus, mult, div;
    cin >> plus >> minus >> mult >> div;

    // 연산자 v
    for(int i = 0; i < plus; i++) v.push_back(1);
    for(int i = 0; i < minus; i++) v.push_back(2);
    for(int i = 0; i < mult; i++) v.push_back(3);
    for(int i = 0; i < div; i++) v.push_back(4);

    // 연산자 전체를 나열 -> 같은 것이 있는 순열
    do {
        int answer = input[0];
        for(int i = 0; i < N - 1; i++) {
            if(v[i] == 1) answer += input[i + 1];
            else if(v[i] == 2) answer -= input[i + 1];
            else if(v[i] == 3) answer *= input[i + 1];
            else if(v[i] == 4) answer /= input[i + 1];
        }

        if(answer > ans_max) ans_max = answer;
        if(answer <= ans_min) ans_min = answer;
    } while(next_permutation(v.begin(), v.end()));

    cout << ans_max << "\n" << ans_min;

    return 0;
}