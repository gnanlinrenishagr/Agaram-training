email=input("enter email")
password=input("enter password")
if email != "gnaninrenisha@gmail.com" and password=="gr1604":
    print("wrong email")
elif password !="gr1604" and email == "gnaninrenisha@gmail.com":
    print("wrong password")
elif email!="gnaninrenisha@gmail.com" and password!="gr1604":
    print("you are not authentised")
elif email=="gnaninrenisha@gmail.com" and password=="gr1604":
    print("you are logged in sucessfully")


