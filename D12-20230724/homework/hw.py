#to print natural numbers from 1 to 10
n=11
for x in range(1,n):
    print(x)

                                     

#print even numbers in agiven range
given_range=10
for x in range(given_range):
    if x%2==0  :
        print(x)                                   



#print odd numbers in a given range
given_range=10
for x in range(given_range):
    if x%2!=0:
        print(x)



#find the sum of all numbers from from 1 to a given number
given_num=int(input("enter a number"))
ans=0
for x in range(1,given_num+1):
    ans += x
print(ans)


#find the sum of odd numbers from from 1 to a given number
given_num=int(input("enter number"))
ans=0
for x in range(1,given_num+1):
    if x%2!=0:
        ans += x
print(ans)



#to print a multiplication table
given_num=10
for x in range(1,given_num+1):
    print(6,"*",x,"=",6*x)


given_num=10
num=7
for x in range(1,given_num+1):
    print(num,"*",x,"=",num*x)




#Python program to count the total number of digits in a number.
given_num=3456789021
given_num=str(given_num)
count=0
for x in given_num:
    count +=1
print(count)



#Python program to check if the given string is a palindrome.giving palindrome words 
given_string=input("enter a word")
reverse_string=""
for x in given_string:
    reverse_string=x +reverse_string
if reverse_string==given_string:
    print("this word",given_string,"is a palindrome")   
else:
    print("this word",given_string,"is not a palindrome")   






#Example 9: Python program that accepts a word from the user and reverses it.
word=input("enter word")
reverse_string=""
for x in word :
    reverse_string=x+ reverse_string
print(reverse_string)



