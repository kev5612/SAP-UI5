#Test directory functions
import os 
from pprint import pprint
#Define path
filepath = os.path.join("C:\\", "Path", "file")
#use OS.PATH to get the correct / \ slash
print(filepath)

#Check if file exists and create it
if not os.path.exists(filepath):
    os.makedirs(filepath)
    print("Dir created")

#Now check if it exists and delete it
if os.path.exists(filepath):
    os.rmdir(filepath)
    print("Dir removed")

#Show all functions
#pprint(dir(os))     
help(os.makedirs)