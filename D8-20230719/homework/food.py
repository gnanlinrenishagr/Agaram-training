item1=input("enter first value")
item2=input("enter second value")
# milk=1.02
# popcorn=2.5
# bread=2.5
# if item1 and item2:
#     if (item1=="milk" and item2=="popcorn"):
#         print(milk+popcorn)
#     elif (item1=="milk" and item2=="bread"):
#         print(milk+bread)
#     elif (item1=="bread" and item2=="popcorn"):
#         print(bread+popcorn)
#     elif (item1=="popcorn" and item2=="milk"):
#         print(popcorn+milk)
#     elif (item1=="bread" and item2=="milk"):
#         print(bread+milk)
#     elif (item1=="popcorn" and item2=="bread"):
#         print(popcorn+bread)
#     elif (item1==item2=="milk"):
#         print(milk+milk)
#     elif (item1==item2=="popcorn"):
#         print(popcorn+popcorn)
#     elif (item1==item2=="bread"):
#         print(bread+bread)
#     else:
#         print("Item is unavailable")
# if item1 and item2:
#     if (item1=="milk" and item2=="popcorn")or (item1=="popcorn" and item2=="milk"):
#         print(milk+popcorn)
#     elif (item1=="milk" and item2=="bread") or (item1=="bread" and item2=="milk"):
#         print(milk+bread)
#     elif (item1=="bread" and item2=="popcorn")or (item1=="popcorn" and item2=="bread"):
#         print(bread+popcorn)
#     else:
#         print("Item is unavailable")
user_foods={"milk":1.02,
            "popcorn":2.5,
            "bread":2.5}
if item1 and item2:
    if (item1=="milk" and item2=="popcorn")or (item1=="popcorn" and item2=="milk"):
        print(user_foods["milk"]+user_foods["popcorn"])
    elif (item1=="milk" and item2=="bread") or (item1=="bread" and item2=="milk"):
        print(user_foods["milk"]+user_foods["bread"])
    elif (item1=="bread" and item2=="popcorn")or (item1=="popcorn" and item2=="bread"):
        print(user_foods["bread"]+user_foods["popcorn"])
    else:
        print("Item is unavailable")

