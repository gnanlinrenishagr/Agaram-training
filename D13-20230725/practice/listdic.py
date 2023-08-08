# fruits=['apple',"banana","orange"]
# fruits.append("pineapple")
# fruits[0]="grapes"
# fruits.insert(1,"dragon fruit")
# print(fruits)
# flowers=["jasmine","rose","daisy"]
# all=fruits+flowers
# print(all)
# details={"name":"renisha",
#          "place":"vettumani"}
# details["phone"]=9994948032
# details["name"]="G R Gnanlin Renisha"
# details.update({"class":12,"age":21,"date of birth":"16-04-2002S"})
# print(details)


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
name={"name":"delama",
      "place":"nagercoil",
      "hobbies":["drawing","book reading","gardening"]}
# friends_name.append(name)
#  hobby=input("enter hobby")
# for x in friends_name:
#     hobbies=x["hobbies"]
#     hobbies.append("coding")
#     x.update({"bootcamp":"karka"})
#     print(x["name"])
#     for hob in hobbies:
#         print(hob)
#         if hob==hobby:
#             print(x["name"])
# print(friends_name)
for x in friends_name:
    for hobby in x["hobbies"]:
        if hobby=="drawing":
            x.update({"eligible":True})
            break
        else:
            x.update({"eligible":False})
print(friends_name)