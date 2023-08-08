#integer
int1=56
int2=45
int3=978
int4=954
int5=345
int6=65
print(int1+int2)
print(int3-int4)
print(int5*int6)
print(int5/int2)
#string
str1="Hello"
str2="world"
str3="I"
str4="am"
str5="Gnanlin"
print(str1+str2+str3+str4+str5)
#float
float1=3.9704
float2=8.78
print(float1+float2)
print(float2-float1)
print(float1*float2)
print(float2/float1)
#list
birds=["crow","parrot","sparrow","penguin"]
print(len(birds))
birds.append("owl")
birds.remove("penguin")
birds.append("love_birds")
print(len(birds))
print(birds)
#dictionary
my_phone={"brand":"oppo",
         "model":"A_31",
         "year":2020}
print("The brand of phone is",my_phone["brand"] ) 
my_laptop={"brand":"hp",
           "model":15,
           "year":2023}
print("The brand of my laptop is",my_laptop["brand"])
print("The model of my lap top is",my_laptop["model"])
#boolean 
has_passed=False
marks=80
if (marks>50):
    has_passed=True
print(has_passed)
        



