#include <iostream>
#include <string>

using namespace std;

int N;
bool endFlag = false;

bool isBad(string str) {
    int len = str.size();
    int end = len - 1;

    for(int i = 1; i <= len / 2; i++) {
        string a = str.substr(end - i, i);
        string b = str.substr(end, i);
        if(!a.compare(b)) return false;
        --end;
    }

    return true;
}

void backtracking(int idx, string str) {

    if(endFlag) return;
    if(!isBad(str)) return;

    // stop condition
    if(idx == N) {
        cout << str << "\n";
        endFlag = true;
        return;
    }

    // next
    backtracking(idx + 1, str + '1');
    backtracking(idx + 1, str + '2');
    backtracking(idx + 1, str + '3');
}

int main() {
    // input
    cin >> N;

    backtracking(0, ""); // index, str

    return 0;
}