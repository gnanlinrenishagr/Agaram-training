# userDtails = [{
#     "name" : "saravana",
#     "email" : "saravana@gmail.com",
#     "password" : "saravan@123",
# },
# {
#     "name" : "benish",
#     "email" : "benish@gmail.com",
#     "password" : "benish@123",
# },
# {
#     "name" : "kabeesh",
#     "email" : "kabeesh@gmail.com",
#     "password" : "kabeesh@123",
# },
# {
#     "name" : "naathan",
#     "email" : "naathan@gmail.com",
#     "password" : "naathan@123",
# }]
# answer=None
# def login (mail,passw,userdetails):
    
#     for mail_pass in userDtails:
#         if mail==mail_pass["email"] and passw==mail_pass["password"]:
#             answer=mail_pass["name"]
#             break
#         elif mail!=mail_pass["email"] or passw!=mail_pass["password"]:
#             answer="no account found"
#     print(answer)    
# def register (mail,passw,name,passwo,userdetails):
    
#     for detail in userDtails:
#         if mail==detail["email"] and passw==detail["password"] :
#             answer="you already have an account in the name:",name
            
#         elif passw==passwo:
#             new_user={"name":name,
#                      "email":mail,
#                      "password":passw}
#             userDtails.append(new_user)
#             answer=userDtails
#     print(answer)
            


# def reg_login (user):
    
#     if about_user=="registered":
#         email=input("enter email")
#         password=input("enter password")
#         login(email,password,userdetails)

                
            
#     elif about_user=="new user":
#         email=input("enter your email")
#         password=input("enter your password")
#         user_name=input("enter your name")
#         confirm_password=input("confirm your password")
#         register(email,password,user_name,confirm_password,userDtails)
# about_user=input("registered/new user")
# reg_login(about_user)      
        
        
        
        
userDtails = [{
    "name" : "saravana",
    "email" : "saravana@gmail.com",
    "password" : "saravan@123",
},
{
    "name" : "benish",
    "email" : "benish@gmail.com",
    "password" : "benish@123",
},
{
    "name" : "kabeesh",
    "email" : "kabeesh@gmail.com",
    "password" : "kabeesh@123",
},
{
    "name" : "naathan",
    "email" : "naathan@gmail.com",
    "password" : "naathan@123",
}]
answer=""
def login (mail,passw):
    
    for mail_pass in userDtails:
        if mail==mail_pass["email"] and passw==mail_pass["password"]:
            answer=mail_pass["name"]
            break
        elif mail!=mail_pass["email"] or passw!=mail_pass["password"]:
            answer="no account found"
    print(answer)    
def register (mail,passw,name,passwo):
    
    for detail in userDtails:
        if mail==detail["email"] and passw==detail["password"] :
            answer="you already have an account in the name:",name
            
        elif passw==passwo:
            new_user={"name":name,

                     "email":mail,
                     "password":passw}
            userDtails.append(new_user)
            answer=userDtails
    print(answer)
            


def reg_login (user):
    
    if user=="registered":
        email=input("enter email")
        password=input("enter password")
        login(email,password)

                
            
    elif user=="new user":
        email=input("enter your email")
        password=input("enter your password")
        user_name=input("enter your name")
        confirm_password=input("confirm your password")
        register(email,password,user_name,confirm_password)

about_user=input("registered/new user")
reg_login(about_user)      
        
        
        
        

    



         

    



         
