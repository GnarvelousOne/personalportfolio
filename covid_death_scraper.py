#!/usr/bin/env/ python

import requests
from bs4 import BeautifulSoup
from time import sleep
from random import randint

webpage_response = requests.get('https://finance.yahoo.com/quote/YM=F?p=YM=F')
webpage = webpage_response.content
soup = BeautifulSoup(webpage, "html.parser")

current1Titles = soup.find_all(attrs={'class':'D(ib) Va(m) Pstart(10px) Pend(8px) Bdendc($lightGray) Bdendw(1px) Bdends(s)'})


t1List = []

for div in current1Titles:
    t1List.append(div)

def listFunc():
    h = len(t1List)
    string1List = ""
    while h > 0:
        string1List += str(t1List[h-1]).replace('<div class="top-post-title-inner">','').replace('</div>',';')
        h = h - 1
    main1List = string1List.split(';')
    main1List.pop(-1)

    i = len(t2List)
    string2List = ""
    while i > 0:
        string2List += str(t2List[i-1]).replace('<div class="secondary-post-title-inner">','').replace('</div>',';')
        i = i - 1
    main2List = string2List.split(';')
    main2List.pop(-1)

    with open('titles.txt', 'w') as titleText:
        titleText.write('')
    titleText.close()

    j = len(main1List)
    while j > 0:
        print(main1List[j-1])
        j = j - 1
        with open('titles.txt', 'a') as titleText:
            titleText.write(main1List[j]+';\n')


    k = len(main2List)
    while k > 0:
        print(main2List[k-1])
        k = k - 1
        with open('titles.txt', 'a') as titleText:
            titleText.write(main2List[k]+';\n')

    titleText.close()

listFunc()
