import sys
import csv
import json
user=[]
user1=[]
x=0
a=(sys.argv[1:])
'''with open('user.csv','w') as f:
    pass
f.close()'''
'''with open('user.csv','r') as f:
    reader=csv.reader(f)
    for row in reader:
        if (a[0]==row[0]):
            user1.append('1')
            json_list = json.dumps(user1)
            print(json_list)
            x=1
            break'''
if(x==0):        
    with open('user.csv','a',newline='') as fp:
        writer=csv.writer(fp)
        for i in sys.argv[1:]:
            user.append(i)
            writer.writerow(user)
    with open('user.csv','r',newline='') as f:
        reader=csv.reader(f)
        for row in reader:
            user1.append(row[0])
    json_list = json.dumps(user1)
    print(json_list)
