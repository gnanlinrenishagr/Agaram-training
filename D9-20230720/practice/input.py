# num1=int(input("enter first number"))
# num2=int(input("enter second number"))
# math_operation=input("enter operator")
# if math_operation== "+" :
#     print ( num1+num2)
# elif math_operation== "-":
#        print( num1-num2)
# elif math_operation== "*":
#        print(num1*num2)
# elif math_operation== "/":
#     print(num1/num2)
# num1=int(input("enter first number"))
# num2=int(input("enter second number"))
# num3=int(input("enter third number"))
# num4=int(input("enter fourth number"))
# num5=int(input("enter fifth number"))
# add=num1+num2+num3
# print(add)
# total=add*num4*num5
# print(total)
# if total%2==0:
#     print("even")
# else:
#     print("odd")
# basic_salary=int(input("enter basic salary"))
# if basic_salary>0 and basic_salary<=10000: 
#     hra=basic_salary*0.2
#     da=basic_salary*0.05
#     print(basic_salary+hra+da)
# elif basic_salary>10000 and basic_salary<=20000:
#     hra=basic_salary*0.25
#     da=basic_salary*0.07
#     print(basic_salary+hra+da)
# elif basic_salary>20000:
#     hra=basic_salary*0.30
#     da=basic_salary*0.08
#     print(basic_salary+hra+da)
# sub1=int(input("enter maths mark"))
# sub2=int(input("enter physics mark"))
# sub3=int(input("enter chemistry marks"))
# if sub1>=65 and sub2>=55 and sub3>=50:
#     three_sub=sub1+sub2+sub3
#     two_sub=sub1+sub2
#     if three_sub>=190 or two_sub>=140:
#         print("you are eligible")
#     else:
#         print("you are not eligible")
# else:
#     print("you are not eligible")
# units=int(input("total unit of current"))
# cost=int(input("cost per unit"))
# total=(units*cost)
# if units<100:    
#     print(total)
# elif units>100:   
#     if units>=100 and units<500:
#         total1=total+50
#         gst=total1*0.18
#         main_total=total1+gst
#         print(main_total)
#     elif units>=500 and units<1000:       
#         total1=total*0.05
#         gst=total1*0.18
#         main_total=total1+gst
#         print(main_total)


def function (basic_salary):
    if basic_salary>0 and basic_salary<=10000: 
        hra=basic_salary*0.2
        da=basic_salary*0.05
        print(basic_salary+hra+da)
        return basic_salary
    elif basic_salary>10000 and basic_salary<=20000:
        hra=basic_salary*0.25
        da=basic_salary*0.07
        print(basic_salary+hra+da)
        return basic_salary
    elif basic_salary>20000:
        hra=basic_salary*0.30
        da=basic_salary*0.08
        print(basic_salary+hra+da)
        return basic_salary
salary=int(input("enter basic salary"))
function(salary)