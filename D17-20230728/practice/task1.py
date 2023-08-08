select_group=input("enter group name")
list=["group a","group b","group c"]
for groupitem in list:
    if groupitem==select_group:
        ans=True
        break
    else:
        ans=False
print(ans)
#another method
if select_group in list:
    print("true")
else:
    print("false")
    