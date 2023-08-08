n=5
for i in range(n):
    print("*"*(i+1))
    #use this
for i in range(n):
    for j in range(i+1):
        print("*",end='')
    print('')
       #reverse 
for i in range(n):
    for j in range(n,i,-1):
        print("*",end='')
    print('')