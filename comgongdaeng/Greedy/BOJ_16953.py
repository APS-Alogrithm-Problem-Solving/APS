# B -> A
import sys
cnt = 1
A, B = map(int, sys.stdin.readline().split())
while B != A:
    cnt += 1
    temp = B
    if B % 10 == 1:
        B //= 10
    elif B % 2 == 0:
        B //= 2
    
    if temp == B:
        print(-1)
        break
else:
    print(cnt)