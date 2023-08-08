monthly_jwel_rate = [
    {"month":"Jan",
     "gold_rate":2000,
     "jwels_list":[{
         "name":"chain",
         "making_charge":12
     },{
         "name":"ring",
         "making_charge":10
     }]},
     {"month":"Feb",
     "gold_rate":4000,
     "jwels_list":[{
         "name":"chain",
         "making_charge":12
     },{
         "name":"ring",
         "making_charge":10
     }]},
     {"month":"March",
     "gold_rate":3600,
     "jwels_list":[{
         "name":"chain",
         "making_charge":12
     },{
         "name":"ring",
         "making_charge":10
     }]},
     {"month":"April",
     "gold_rate":3678,
     "jwels_list":[{
         "name":"chain",
         "making_charge":12
     },{
         "name":"ring",
         "making_charge":10
     }]},
     {"month":"May",
     "gold_rate":4500,
     "jwels_list":[{
         "name":"chain",
         "making_charge":12
     },{
         "name":"ring",
         "making_charge":10
     }]},
]
min_value=monthly_jwel_rate[0]["gold_rate"]
max_value=0
min_max_data={}
max_rate_month=None
min_rate_month=None
for value in monthly_jwel_rate:
    if max_value<=value["gold_rate"]:
        max_value=value["gold_rate"]
        max_rate_month=value["month"]
    elif min_value>=value["gold_rate"]:
        min_value=value["gold_rate"]
        min_rate_month=value["month"]
    min_max_data["max_month_value"]={"month":max_rate_month ,
                                          "rate":max_value}
    min_max_data["min_month_value"] ={"month":min_rate_month ,
                                         "rate":min_value}
    jwels_list=value["jwels_list"]
    for jwels in jwels_list:
        makingcharge=value["gold_rate"]*(jwels["making_charge"]/100)
        gst=value["gold_rate"]*0.18
        total=value["gold_rate"]+gst+makingcharge
        if value["month"]== max_rate_month:
            min_max_data["max_month_value"][jwels["name"]]=total
        elif value["month"]==min_rate_month:
            min_max_data["min_month_value"][jwels["name"]]=total
print(min_max_data)