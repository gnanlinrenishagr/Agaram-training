# list1=[10,30,50,70,90,110]
# list2=[15,35,55,65,95,100]
# position=0
# for x in list1 :
    
#     if list1[position]>list2[position]:
#         print(list1[position],list2 [position],list1[position],"is the large number")
        
#     elif list1[position]<list2[position]:
#         print(list2[position],list1 [position],list2[position],"is the large number")
#     position=1+position


# #using range
# for i in range(len(list1)):
#     if list1[i]>list2[i]:
#         ans=list1[i]
#     elif list2[i]>list1[i]:
#         ans=list2[i]
#     print(ans)


#find the reapeting number
nums=[2,3,4,4,2,5,9,9,9,4,5,5]
def duplicates (numbers):
    new_list=[]
    for num in range(len(numbers)-1):
        if numbers[num]==numbers[num+1] and numbers[num] not in new_list:
            new_list.append(numbers[num])
    return new_list
print(duplicates(nums))
