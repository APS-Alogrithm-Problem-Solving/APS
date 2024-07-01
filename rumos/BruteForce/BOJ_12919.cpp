#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

string S, T;
bool answer = false;

/**
 * 문제에 주어진 조건대로 두 가지 연산만 수행하면서 A -> B : 시간 초과
 * B -> A로 확인하면서 Pruning!
*/

void A_and_B(string input) {
    // answer / stop condition
    if(S == input) {
        answer = true;
        return;
    }

    if(input.size() <= S.size()) return; // B -> A 길이가 작아짐

    if(input[0] == 'B') {
        string next = input;
        reverse(next.begin(), next.end());
        next.pop_back();
        A_and_B(next);
    }

    if(input[input.size() - 1] == 'A') {
        input.pop_back();
        A_and_B(input);
    }
}

int main() {
    // input
    cin >> S >> T;

    A_and_B(T); 

    cout << answer;

    return 0;
}