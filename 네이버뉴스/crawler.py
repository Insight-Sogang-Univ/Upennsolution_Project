from configure_request import *
import requests as req, json
from bs4 import BeautifulSoup as bs
from datetime import datetime

def get_news_url():
    news_url = []
    for i in range(int(parameters['page'])):
        parameters['page'] = i + 1
        url=base_url+parameters['sid1']
        date = str(datetime.today())
        date = date.split(' ')[0].replace('-', '')
        url = url + '&date=' + date
        response = req.get(url, headers=header, data=parameters)
        soup=bs(response.content, 'html.parser')
        contents = soup.find_all('ul',{"class":["type06_headline","type06"]})
        tmp=[]
        for i in contents:
            tmp=tmp+i.find_all('li')
        for i in tmp:
            tmp2=i.find('a')["href"]
            news_url.append(tmp2)

    return news_url
