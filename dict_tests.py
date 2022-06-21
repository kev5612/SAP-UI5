#Define dictionary
dicta = {"key1":"value1","key2":"value2"}

#Print a specific value by direct access
print(dicta["key1"])
#Use get method to get a specific value by key
print(dicta.get("key1"))
#Space for readability
print("--------------------------------------")

#Loop At dictionary to show values, first variable will be at key
for key in dicta:
    print(dicta[key])
#Space for readability
print("--------------------------------------")

#Second way to loop into dictionary using 2 variables
for key, value in dicta.items():
    print(key + ":" + value)
#Space for readability
print("--------------------------------------")

#Nested dictionaries
dictb = {"english":{"word1":"value1"}, "español":{"palabra1":"valor1"}}
#Access specific words, similar to any array
print(dictb.get("english").get("word1"))
#Space for readability
print("--------------------------------------")

#Fast way to create a dictionary with sequential values 
dictc = {i: i*2 for i in range(10)}
print(dictc)
#Space for readability
print("--------------------------------------")
#Space for readability
print("--------------------------------------")


#Generate a dictionary with a word count
#Corpus is a list of text characters
corpus = 'learn all about the Python Dictionary and its potential. \
          You would also learn to create word frequency using the Dictionary'
word_freq = dict()
#We generate a list by words sepparated by space (default)
corpus_word = str(corpus).split()
#Loop through the generated word list and append new words or add to cound
for word in corpus_word:
    if word not in word_freq:
        word_freq[word]=1
    else:
        word_freq[word]+=1

#Show result in neat order 
for key, value in word_freq.items():
    print(key,end=(":"+str(value)+"\n" ))

