list=["a","b","c","d","e","f","g"]
for index,value in enumerate(list):
    print(2*(index+1),value)


def cal_gst (amount):
    return(amount*0.03)
gold_price=25000
making_charge=2500
gst=cal_gst(gold_price+making_charge)
total=gold_price+making_charge+gst
print(total)