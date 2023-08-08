n=5
# count=0
# for i in range(n):
#     for j in range(n):
#         count+=1
#         print(count," ",end='')
#     print('')
#     #mod 2
# for i in range(1,(n*n)+1):
#     print(i,end='')
#     if i%n==0:
#         print('\n')

for i in range((n*n),0,-1):
    if i%n==0:
        print('\n')
    print(i,end=' ')