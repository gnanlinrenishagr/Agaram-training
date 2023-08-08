# amount=int(input("enter total amount"))
# if amount>500 and amount<1000:
#     print("You have owned a silver token")
# elif amount>1000 and amount<5000:
#     print("You have owned a golden token")
# elif amount>=5000:
#     print("You have owned a platinum token")
# elif amount<=500:
#     print("no token available")

def rupees (amount):

    if amount>500 and amount<1000:
        print("You have owned a silver token")
        return amount
    elif amount>1000 and amount<5000:
        print("You have owned a golden token")
        return amount
    elif amount>=5000:
        print("You have owned a platinum token")
        return amount
    elif amount<=500:
        print("no token available")
amt=int(input("enter total amount"))
print(rupees(amt))