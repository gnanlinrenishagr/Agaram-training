mistake_details={
                    "Name":"Gnanlin Renisha G R",
                    "Place":"Vettumani",
                    "Mistake":"entering wrong variable name",
                    "Reason" : "I thought to assingn a new variable name for the variable ,as the variable name is long to give inside for loop",
                    "Example":"an example is given below",
                    "friends_name":     [{"name":"Gnanlin",
                                          "place":"vettumani",
                                          "hobbies":["music","drawing","gardening"]},
                                          {"name":"Shali",
                                          "place":"kolachal",
                                          "hobbies":["drawing","book reading","dancing"]},
                                          {"name":"Sham",
                                           "place":"mondaymarket",
                                           "hobbies":["cricket","movie","travelling"]}],
                 
                                     
                   

                    
                }
friends_name=mistake_details["friends_name"]

for x in friends_name:
    hobbies=x["hobbies"]
    if hobbies==x["hobbies"]:
        for hob in hobbies:
            print(hob)
            
print("I will get correct answer")


