item_list=[{"name":"apple","category":"fruits"},
           {"name":"pineapple","category":"fruits"},     
           {"name":"carrot","category":"vegetable"},
           {"name":"beans","category":"vegetable"},
           {"name":"raddish","category":"vegetable"}
           
          
          ]


# def ordered_items (items):
#     item={}
#     fruits=[]
#     vegetables=[]
#     for categ in item_list:
#         if categ["category"]=="fruits":
#             fruits.append(categ["name"])
#         elif categ["category"]=="vegetable":
#             vegetables.append(categ["name"])
#     item.update({"fruits":fruits,"vegetables": vegetables})
#     return item
        
# print(ordered_items (item_list)  )
## append to list without append
#item=[{"name":"orange","category":"fruits"}]
#print(item_list +item)

# def ordered_items(items):
#     temp={}
#     for categ in items:
#         if categ["category"] in temp:
#             temp[categ["category"]].append(categ["name"])
#         else:
#             temp[categ["category"]]=[categ["name"]]
#     return temp
# print(ordered_items(item_list))

print(item_list[:2]+item_list[3:])