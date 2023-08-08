# monthly_gold_price=[{"month":"january",
#                      "gold_price":2500,
#                      "jewels_list":[{"name":"chain",
#                                      "mak_charge":20},
#                                      {"name":"ring",
#                                      "mak_charge":20},
#                                      {"name":"bangles",
#                                      "mak_charge":20}] },
#                     {"month":"february",
#                     "gold_price":2000,
#                     "jewels_list":[{"name":"chain",
#                                      "mak_charge":20},
#                                      {"name":"ring",
#                                      "mak_charge":10},
#                                      {"name":"bangles",
#                                      "mak_charge":10}]},
#                     {"month":"march",
#                     "gold_price":2600,
#                     "jewels_list":[{"name":"chain",
#                                      "mak_charge":20},
#                                      {"name":"ring",
#                                      "mak_charge":20},
#                                      {"name":"bangles",
#                                      "mak_charge":2}]},
#                     {"month":"april",
#                     "gold_price":2700,
#                     "jewels_list":[{"name":"chain",
#                                      "mak_charge":27},
#                                      {"name":"ring",
#                                      "mak_charge":28},
#                                      {"name":"bangles",
#                                      "mak_charge":21}]},
#                     {"month":"may",
#                     "gold_price":1900,
#                     "jewels_list":[{"name":"chain",
#                                      "mak_charge":17},
#                                      {"name":"ring",
#                                      "mak_charge":19},
#                                      {"name":"bangles",
#                                      "mak_charge":19}]}]
# min_value=monthly_gold_price[0]["gold_price"]
# max_value=monthly_gold_price[0]["gold_price"]
# min_month=None
# max_month=None
# for minimum in monthly_gold_price:
#     print(minimum["gold_price"])
#     if (minimum["gold_price"])<=min_value:
#         min_value=(minimum["gold_price"])
#         min_month=(minimum["month"])
#     if (minimum["gold_price"])>=max_value:
#         max_value=(minimum["gold_price"])
#         max_month=(minimum["month"])
 
#     for make in minimum["jewels_list"]:
        
#         main_charge=(minimum["gold_price"])*(make["mak_charge"])/100
#         gst=0.03*(main_charge+(minimum["gold_price"]))
#         total_price=main_charge+(minimum["gold_price"])+gst
#         print(make["name"] + " rate is " +str(total_price))

# print("the minimum value," ,min_value,"is in the month of" ,min_month)
# print("the maximum value ,",max_value,"is in the month of ",max_month)
 



# user_details = [
                
#                 {
#                     "name" : "ajay",
#                     "marks" : [80,90,70,40,60]
#                 },
#                 {
#                     "name" : "manimala",
#                     "marks" : [100,80,40,90,1]
#                 },
#                 {
#                     "name" : "abarna",
#                     "marks" : [72,65,68,89,4]
#                 }
#         ]
        
        
        
# for student in user_details:
#     # print(student['marks'])
#     total = 0
#     max_value=0
#     for x in student['marks']: 
#         total = total + x
#     if total>=max_value:
#             max_value=total    
        
#     print(total)           
            
#     print(max_value)


user_details=[
                {
                    "name":"rani",
                    "marks":[90,56,78,89,99]

                },
                {
                    "name":"reni",
                    "marks":[93,96,98,98,98]

                },
                {
                    "name":"retisha",
                    "marks":[48,49,68,75,69]

                },
                {
                    "name":"anisha",
                    "marks":[72,89,65,98,98]

                },
             ]
maxi=0
for m in user_details:
    # print(m)
    total=0
    
    for ma in m["marks"]:
        total=total + ma
    if total>=maxi:
        maxi=total

print(maxi)


# students_data = [
#     {
#         "name": "John",
#         "mid_term_result" : {"math": 30, "science": 42},
#         "attendance": [
#             {"month": "july", "total_working_days": 26, "leave": 3},
#             {"month": "augest", "total_working_days": 24, "leave": 0},
#             {"month": "sept", "total_working_days": 25, "leave": 2}
#         ]
#     },
#     {
#         "name": "Emma",
#         "mid_term_result": {"math": 20, "science": 49},
#         "attendance": [
#             {"month": "july", "total_working_days": 26, "leave": 6},
#             {"month": "augest", "total_working_days": 24, "leave": 10},
#             {"month": "sept", "total_working_days": 24, "leave": 5}
#         ]
#     },
#     {
#         "name": "Alex",
#         "mid_term_result": {"math": 30, "science": 40},
#         "attendance": [
#             {"month": "july", "total_working_days": 26, "leave": 5},
#             {"month": "augest", "total_working_days": 24, "leave": 6},
#             {"month": "sept", "total_working_days": 24, "leave": 4}
#         ]
#     },
# ]


# print("Students not eligible for the quarterly exam:")
# for student in students_data:

#     math_score = student["mid_term_result"]["math"]
#     science_score = student["mid_term_result"]["science"]

#     total_working_days = 0
#     total_leaves = 0

#     for attendance_data in student["attendance"]:
#         total_working_days += attendance_data["total_working_days"]
#         total_leaves += attendance_data["leave"]

#     attendance_percentage = ( (total_working_days - total_leaves) / total_working_days ) * 100

#     if (math_score < 35 or science_score < 35) and attendance_percentage < 80:
#         print(student["name"])



# grocery_items = [
#     {"item": "Apples", "price": 2.50},
#     {"item": "Bananas", "price": 1.70},
#     {"item": "Milk", "price": 3.20},
#     {"item": "Bread", "price": 2.00},
#     {"item": "Eggs", "price": 2.80},
#     {"item": "Cheese", "price": 5.50},
#     {"item": "Tomatoes", "price": 1.90},
#     {"item": "Potatoes", "price": 2.10},
#     {"item": "Onions", "price": 1.50},
#     {"item": "Chicken", "price": 8.00}
# ]

# budget_limit = int(input("Enter the amount you have"))
# selected_item = input("Which Item You Want to buy")

# for item in grocery_items:

#    if item["item"]==selected_item:
#         max_quantity = int(budget_limit / item["price"] )
#         remaining_cost = budget_limit % item["price"] 
#         total_cost = (item["price"]  * max_quantity)
#         # total_cost=budget_limit-remaining_cost
#         print(remaining_cost)
#         if max_quantity > 0:
#              print(item["item"] , int(max_quantity),"units - Total Cost: $",total_cost)
#              if remaining_cost>0 :
#                  print("Remaining Amount You Have",remaining_cost)
#         else : 
#             print("Sorry You Didn't have enough amount to buy an item")

# # print("Please Enter a Correct Item")


# monthly_jwel_rate = [
#     {"month":"Jan",
#      "gold_rate":2000,
#      "jwels_list":[{
#          "name":"chain",
#          "making_charge":12
#      },{
#          "name":"ring",
#          "making_charge":10
#      }]},
#      {"month":"Feb",
#      "gold_rate":4000,
#      "jwels_list":[{
#          "name":"chain",
#          "making_charge":12
#      },{
#          "name":"ring",
#          "making_charge":10
#      }]},
#      {"month":"March",
#      "gold_rate":3600,
#      "jwels_list":[{
#          "name":"chain",
#          "making_charge":12
#      },{
#          "name":"ring",
#          "making_charge":10
#      }]},
#      {"month":"April",
#      "gold_rate":3678,
#      "jwels_list":[{
#          "name":"chain",
#          "making_charge":12
#      },{
#          "name":"ring",
#          "making_charge":10
#      }]},
#      {"month":"May",
#      "gold_rate":4500,
#      "jwels_list":[{
#          "name":"chain",
#          "making_charge":12
#      },{
#          "name":"ring",
#          "making_charge":10
#      }]},
# ]

# # below to find the minium and maximum gold rate 

# min_rate = monthly_jwel_rate[0]["gold_rate"]
# max_rate = 0
# min_max_data  = {}
# for jwel_data in monthly_jwel_rate:

#     gold_rate = jwel_data["gold_rate"]
#     month = jwel_data['month']

#     if gold_rate <= min_rate:
#         min_rate = gold_rate
#         min_rate_month = month

#     if gold_rate >= max_rate:
#         max_rate = gold_rate
#         max_rate_month = month

# min_max_data['min_month_rate'] = {
#     "month":min_rate_month,
#     "gold_rate":min_rate,
#     }
# min_max_data['max_month_rate'] = {
#     "month":max_rate_month,
#     "gold_rate":max_rate}

# # below code is to find the amount for minimum and maxium gold rate jwells 

# for jwels_data in monthly_jwel_rate:

#     jwels_list = jwels_data["jwels_list"]
#     gold_rate = jwels_data["gold_rate"]
#     month = jwels_data['month']
#     for jwels in jwels_list:
#         making_charge = gold_rate *(jwels["making_charge"]/100)
#         gst = gold_rate * .18
#         total = gold_rate + making_charge + gst
#         if month == min_rate_month:
#             min_max_data['min_month_rate'][jwels['name']] = total
#         elif month == max_rate_month:
#             min_max_data['max_month_rate'][jwels['name']] = total
            

# print(min_max_data)


