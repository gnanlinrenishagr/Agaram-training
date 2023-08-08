#if conditional statement
gender="male"
if gender =="male":
    print("Blue")
#else conditional statement
gender="female"
if gender =="male":
    print("Blue")
else:
    print("Pink")
#another if added
gender="male"
if gender =="male":
    print("Blue")
elif gender =="female":
    print("Pink")
elif gender =="Transgender":
    print("Lavender")
else:
    print("Invalid Input")

gender="eee"
if gender =="male":
    print("Blue")
elif gender =="female":
    print("Pink")
elif gender =="Transgender":
    print("Lavender")
else:
    print("Invalid Input")

gender="Transgender"
if gender =="male":
    print("Blue")
elif gender =="female":
    print("Pink")
elif gender =="Transgender":
    print("Lavender")
else:
    print("Invalid Input")

#enter gender
gender=input("Enter gender")
if gender =="male":
    print("Blue")
elif gender =="female":
    print("Pink")
elif gender =="Transgender":
    print("Lavender")
else:
    print("Invalid Input")
#compare integers and multiple condition
total_marks=int(input("Enter total marks"))
if total_marks>92 :
    print("You are eligible for MBBS")
elif total_marks>85  and total_marks<=92:
    print("You are eligible for BDS")    
elif total_marks>75 or total_marks<=85:
    print("You are eligible for agriculture")
else:
    print("You are eligible for engineer")
total_marks=85
if total_marks>92 :
    print("You are eligible for MBBS")
elif total_marks>85  and total_marks<=92:
    print("You are eligible for BDS")    
elif total_marks>75 or total_marks<=85:
    print("You are eligible for agriculture")
else:
    print("You are eligible for engineer")
    