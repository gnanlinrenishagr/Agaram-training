trends_mart = [
    {"id": 101, "name": "T-shirt", "price": 15.99, "quantity_in_stock": 50, 
     "available_for": [{'categ' : 'male', 'qty' : 20},
                       {'categ' : 'female','qty' : 25},
                       {'categ' : 'child', 'qty' : 5}],
     "low_stock":[]},
    {"id": 102, "name": "Jeans", "price": 29.99, "quantity_in_stock": 40, 
     "available_for": [{'categ' : 'male', 'qty' : 20},
                       {'categ' : 'female','qty' : 10},
                       {'categ' : 'child', 'qty' : 10}],
     "low_stock":[]},
    {"id": 103, "name": "Shoes", "price": 49.99, "quantity_in_stock": 24, 
     "available_for": [{'categ' : 'male', 'qty' : 4},
                       {'categ' : 'female','qty' : 10},
                       {'categ' : 'child', 'qty' : 10}],
     "low_stock":[]},
    {"id": 104, "name": "Backpack", "price": 39.99, "quantity_in_stock": 14, 
     "available_for": [{'categ' : 'male', 'qty' : 0},
                       {'categ' : 'female','qty' : 4},
                       {'categ' : 'child', 'qty' : 10}],
    "low_stock":[]},
    {"id": 105, "name": "Headphones", "price": 59.99, "quantity_in_stock": 15, 
     "available_for": [{'categ' : 'male', 'qty' : 0},
                       {'categ' : 'female','qty' : 5},
                       {'categ' : 'child', 'qty' : 10}],
    "low_stock":[]},
    {"id": 106, "name": "Sunglasses", "price": 19.99, "quantity_in_stock": 26, 
     "available_for": [{'categ' : 'male', 'qty' : 15},
                       {'categ' : 'female','qty' : 1},
                       {'categ' : 'child', 'qty' : 10}],
    "low_stock":[]}
]
# for product in trends_mart:
#     for categ in product["available_for"]:
#         if categ["qty"]<=5:
#             product["low_stock"] += categ["categ"]
#         elif categ["qty"]==0:
#             product["availability"]=("out of stock",categ["categ"])
#         elif categ["qty"]>0:
#             product["availability"]=("in stock",categ["categ"])
#             for quality in range(categ["qty"]):
#                if quality==0:
#                     product["availability"]+= "out stock",(categ["categ"])
#                     break
#                 elif quality>=0:
#                     product["availability"]+= "in stock",(categ["categ"])

for product in trends_mart:
    for categ in product["available_for"]:
        if categ["qty"]<=5:
            product["low_stock"] += categ["categ"]
    product["availability"]=(categ["categ"])   
    for categ in product["available_for"]:       
        if categ["qty"]==0:
            product["availability"]+= (categ["categ"])

        elif categ["qty"]>0:
            
            product["availability"]+= (categ["categ"])
        
            
print(trends_mart)


# for product in trends_mart:
#     for category in product["available_for"]:
#         for categ in range(category["qty"]):
#             if categ<=5:
#                 product["low_stock"] += category["categ"]
#             elif categ==0:
#                     product["availability"]=("out of stock",category["categ"])
#                 # if categ==0:
#                     product["availability"]=("out of stock",category["categ"])
                    

#             # s
            
            
# print(trends_mart)