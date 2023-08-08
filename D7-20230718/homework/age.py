# age=int(input("enter age"))
# gender=input("enter gender")
# name=input("enter name")
# if age>60 and gender=="male":
#     print("Hi Mr."+ name +",you are a senior citizen")
# elif age>60 and gender=="female":
#     print("Hi Miss."+ name +",you are a senior citizen")
# elif age>18 and gender=="male":
#     print("Hi Mr."+ name +",you are an adult")
# elif age>18 and gender=="female":
#     print("Hi Miss."+ name +",you are an adult")
# elif age<18 and gender=="male":
#     print("Hi Mr."+ name +",you are a teenager")
# elif age<18 and gender=="female":
#     print("Hi Miss."+ name +",you are an teenager")
# name=input("enter name")
# gender=input("enter gender")
# age=int(input("enter age"))
# if gender=="male":
#     if age>60 :
#         print("Hi Mr."+ name +",you are a senior citizen")
#     elif age>18 :
#         print("Hi Mr."+ name +",you are an adult")
#     elif age<18 :
#         print("Hi Mr."+ name +",you are a teenager")
# elif gender=="female":
#     if age>60 :
#         print("Hi Miss."+ name +",you are a senior citizen")
#     elif age>18 :
#         print("Hi Miss."+ name +",you are an adult")
#     elif age<18 :
#         print("Hi Miss."+ name +",you are a teenager")

    


def fuction (gender,age,name):
    if gender=="male":
        if age>60 :
            print("Hi Mr."+ name +",you are a senior citizen")
          
        elif age>18 :
            print("Hi Mr."+ name +",you are an adult")
           
        elif age<18 :
            print("Hi Mr."+ name +",you are a teenager")
        return  (gender,age,name)

    elif gender=="female":
        if age>60 :
            print("Hi Miss."+ name +",you are a senior citizen")
            
        elif age>18 :
            print("Hi Miss."+ name +",you are an adult")
            
        elif age<18 :
            print("Hi Miss."+ name +",you are a teenager")
        return  (gender,age,name)
user_name=input("enter name")
user_gender=input("enter gender")
user_age=int(input("enter age"))
fuction(user_gender,user_age,user_name)
