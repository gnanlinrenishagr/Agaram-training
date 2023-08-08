#lists
friends_name=["Gnanlin","Shali","Bhuvana","Sobith","Sheik Mohammad","Sathya","Boobathy","Sam"]
print(friends_name[7],friends_name[0],friends_name[1])
print(friends_name)
friends_name.append("Renisha")
friends_name.remove("Gnanlin")
print(friends_name)
print(friends_name[3],friends_name[4])
language=["english","tamil"]
#Dictinoray
my_details={"name":"Gnanlin Renisha",
            "place":"vettumani",
            "DOB":"16-04-2002",
            "age":21}
print(my_details["name"])
print(my_details)
#rename
my_details["name"]="Renisha"
print(my_details["name"])
#mixed
friends_name=[{"name":"Gnanlin",
               "place":"vettumani",
               "hobbies":["music","drawing","gardening"]},
              {"name":"Shali",
              "place":"kolachal",
              "hobbies":["drawing","book reading","dancing"]},
              {"name":" Bhuvana",
             "place":"velamadam",
             "hobbies":["craft","drawing","gardening"]},
              {"name":"Sobith",
              "place":"kaliyakavilai",
              "hobbies":["movies","playing","travelling"]},
              {"name":"Shak Mohammad",
              "place":"thirunelveli",
              "hobbies":["cricket","football","travelling"]} ,
              {"name":"Sathya Tharma",
              "place":"thirunelveli",
              "hobbies":["kabbadi","running","travelling"]},
              {"name":"Boobathy",
              "place":"parvathipuram",
              "hobbies":["writing","travelling","directing"]},
              {"name":"Sham",
              "place":"mondaymarket",
              "hobbies":["cricket","movie","travelling"]}]
print(friends_name[3])
print(friends_name[5]["hobbies"][1],friends_name[6]["place"],friends_name[3]["name"])
friends_name[0]["name"]="Renisha"
print(friends_name[0]["name"])
friends_name[0]["hobbies"].append("cooking")
friends_name[5]["hobbies"].append("football")
print(friends_name[5]["hobbies"])
print(friends_name[1]["place"])
friends_name[0]["hobbies"].remove("drawing")
print(friends_name[0]["hobbies"])
