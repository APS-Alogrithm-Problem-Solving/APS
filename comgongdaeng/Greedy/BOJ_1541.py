import sys
# - 뒤에 괄호를 치면 최솟값을 얻을 수 있음.
# 숫자만, 혹은 덧셈으로만 이루어진 문자열로 구성된 exp
exp = sys.stdin.readline().rstrip().split('-')

# exp[0]에서 exp[1], exp[2]... 를 전부 빼주면 됨
ans = sum(map(int, (exp[0].split('+'))))

for i in exp[1:]:
    i = sum(map(int, (i.split('+'))))
    ans -= i

print(ans)