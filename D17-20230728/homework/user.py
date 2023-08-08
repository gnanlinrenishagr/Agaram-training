user_details=[{"name":"Gnanlin",
               "email":"lin@gmail.com",
               "password":"lin@123",
               "hobbies":["music","drawing","gardening"],
               "friends_list":["shali","delma","bhuvana"]},
              {"name":"Shali",
              "email":"shali@gmail.com",
               "password":"shali@123",
              "hobbies":["drawing","book reading","dancing"],
              "friends_list":["lin","delma","bhuvana"]},
              {"name":" Bhuvana",
              "email":"bhu@gmail.com",
               "password":"bhu@123",
             "hobbies":["craft","drawing","gardening"],
             "friends_list":["shali","delma","lin"]},
              {"name":"Sobith",
              "email":"sobith@gmail.com",
               "password":"sobith@123",
              "hobbies":["movies","playing","travelling"],
              "friends_list":["shali","delma","bhuvana"]},
              {"name":"Shak Mohammad",
              "email":"shak@gmail.com",
               "password":"shak@123",
              "hobbies":["cricket","football","travelling"],
              "friends_list":["shali","delma","bhuvana"]} ]
def each (l):
    elements=""
    for element in l :
        elements=elements+","+element
    return elements
def logged (user_log):
    details=user_log["name"],"/",user_log["email"],"your hobbies are :",each(user_log["hobbies"]),"your friends are:",each(user_log["friends_list"])
    print(details)
def users (users_details):
    user_email=input("enter user email")
    user_password=input("enter user password")
    position=0
    for user in users_details:
        if user["email"]==user_email and user["password"]== user_password:
            users_details[position].update({"logged in":"True"})
            logged(user)
        elif user["email"]!=user_email and user["password"]!= user_password:
            users_details[position].update({"logged in":"False"})    
        position=position+1
    print(user_details)

users(user_details)








           