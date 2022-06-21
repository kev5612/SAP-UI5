test_list = [1,3,4,5,[6,7,8]]

for i in test_list:
    if type(i) == list:
        for j in i:
            print(j)
    else:
        print(i)

print(len(test_list))




        