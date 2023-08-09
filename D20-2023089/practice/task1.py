# a=[1,0,2,3,0,4,0,5,0,0,9,0]
# new=[]
# for i in  a :
#     if len(a)!=len(new) :
#         if i!=0:
#             new=new+[i]
#         elif i==0:
#             new=new+[i]
#             if len(a)!=len(new):
#                 new=new+[i]
# print(new)


# #mod2

# a=[1,0,2,3,0,4,0,5,0,0,9,0]
# new=[]
# for i in a:
#     if len(new)<len(a):
#         if i==0 and len(new)<len(a)-1:
#             new+=[i,i]
#         else:
#             new+=[i]
# print(new)

#mod3 single list
a=[1,0,2,3,3,0,4,0,5,0,0,9,0]
count=0
for i in a:
  
    if i==0 :
        a[count]=[0,0]
    else:
        a[count]=i
    count+=1
print(a)

