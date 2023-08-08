# b=int(input("enter number"))
# a=(b%2)
# if a==0:
#     print("even")
# else:
#     print("odd")
# b=int(input("enter number"))
# a=(b%2)
# if not a==0:
#     print("odd")
# else :
#     print("even")
# a=int(input("enter first number"))
# b=int(input("enter second number"))
# if b%a==0:
#     print("yes")
# else:
#     print("no")
# if b%a==0:
#     print("yes")
# elif b%a!=0 :
#     print("no")
# if b%a !=0:
#     print("No")
# else:
#     print("yes")
# a=int(input("enter year"))
# if (a%400==0 and a%100==0 ) or (a%4==0 and a%100!=0):
#     print("leap year")
# else:
#     print("not a leap year")
a=int(input("enter year"))
if (a%400==0 and a%100==0 ) or (a%4==0 and a!=100):
    print("leap year")
else :
    print("not leap year")
