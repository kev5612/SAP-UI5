#Fstrings test

#Variables
Age = 16
Name = "Kevin"
#Simple formatting
print("My name is" +" "+ Name +" "+ "And i'm" +" "+ str(Age))

#Using Fstring we can include variables and logic (After Python 3.6)
print(f"My name is {Name} and i'm {Age+1}")

#Using Format function, this allows to define variables later on 
#they can also define names or use indexes based on format list or be empty and
#follow list order
print("My name is {a} and I'm {b}".format(a = "Kevin", b = 16 + 1))