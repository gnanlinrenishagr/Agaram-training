# def add_num():
#     print(num1+num2)
# num1=int(input("number"))
# num2=int(input ("number"))
# add_num()
# def add_name ():
#     print(firstname+" "+lastname)
# firstname="karka"
# lastname="accadamey"
# add_name()
# def combine_name (a,b):
#     print(a+" "+b)
# combine_name("Gnanlin","Renisha")
# combine_name("Jebi","Nancy")
# def combine_name (a,b):
#     print(a+" "+b)
# a=input("enter first name")
# b=input("enter last name")
# combine_name(a,b)
# gender=input("enter gender")
# def gend (gen):
#     if gen=="male":
#         print("your colour is blue")
#     elif gen=="female":
#         print("your colour is pink")
#     else:
#         print("error")
# gend (gender)

num1=int(input("enter number"))
num2=int(input("enter number"))
def odd_even (max_num):
    if max_num%2==0 :
        
        print("even")
    else:
        print("odd")
def greater_num (number1,number2):
    if number1>number2 :
        print(number1 ,"is the maximum number")
        odd_even(number1)
    elif number1<number2:
        print(number2,"is the maximum number")
        odd_even(number2)

    elif number1==number2:
        print("equal")
greater_num(num1,num2)

