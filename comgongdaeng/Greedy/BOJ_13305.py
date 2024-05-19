import sys

N = int(sys.stdin.readline())
dist = list(map(int, sys.stdin.readline().split()))
price = list(map(int, sys.stdin.readline().split()))

cost = 0

# 더 싼 가격의 주유소를 만났을 때의 가격으로 이동
# 두 번째 도시로 가기 위해 첫 번째 도시에서 무조건 주유를 해야 하므로
# 첫 번째 도시의 가격으로 m(주유소의 가격의 최솟값) 초기화
m = price[0]
for i in range(N-1):
    if price[i] < m:
        m = price[i]
    cost += m * dist[i]

print(cost)