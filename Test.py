#Define class for math
class cl_math:
    #Static data
    className = "Class name"
    nameList = []
    #Constructor
    def __init__(self):
        print("Object created")
    #Add amounts
    def addAmount(self, x, y):
        return x + y
    #Get class name
    def getName(self):
        print(self.className)  
    #Change class name
    def setName(self, name):
        self.className = name  
     #Add item
    def addItem(self,item):
        self.nameList.append(item)       
#Now initiate 2 objets
for i in range(3):
    obj = cl_math()
    print(obj.addAmount(1,i))
    #Change to chedk stuff
    obj.addItem(10 + i)
    print(obj.nameList)

 #Define json
odata = {"name":"Kevin", "age":16}
for j in odata:
    print(j)






