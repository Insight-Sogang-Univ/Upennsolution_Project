from file_writer import *
from selenium import webdriver
import time
from datetime import datetime
import pandas as pd


def sports():
    options = webdriver.ChromeOptions()
    options.add_experimental_option('excludeSwitches', ['enable-logging'])
    driver = webdriver.Chrome('C:\selenium\chromedriver.exe',options=options)
    
    base_url = "https://sports.news.naver.com/wfootball/news/index?isphoto=N&page=1"
    date=str(datetime.today())
    date=date.split(' ')[0].replace('-','')
    base_url=base_url+'&date='+date
    driver.get(base_url)
    cnt = 1
    result = []
    for j in range(1, 10):
        contents = driver.find_elements_by_xpath('//*[@id="_newsList"]/ul/li')
        for i in contents:
            tmp = {}
            #print('-' * 15)
            #print(cnt)
            cnt = cnt + 1

            # 분야 추출
            # category=i.find('a', {"class":"list_word"}).text
            # print("분야: ", category)

            # 제목 추출
            title = i.find_element_by_class_name('title').text.strip()
            #print("제목: ", title)

            # 글쓴이 추출
            # writer_tag = i.find('span', class_='nick')
            # if writer_tag is not None: # None 값이 있으므로 조건문을 통해 회피
            #    writer = writer_tag.text

            # else:
            #    writer = "없음"
            # print("글쓴이: ", writer)

            #    # 유동이나 고닉이 아닌 글쓴이 옆에 있는 ip 추출
            #    ip_tag = i.find('td', class_='gall_writer ub-writer').find('span', class_='ip')
            #    if ip_tag is not None:  # None 값이 있으므로 조건문을 통해 회피
            #        ip = ip_tag.text
            #        print("ip: ", ip)

            # 날짜 추출
            date = i.find_element_by_class_name('time').text
            #print("날짜: ", date)

            # 조회 수 추출
            # views = i.find('span',{"class":"viewV"}).text
            # print("조회수: ", views)

            # 댓글 수
            # comment=i.find('span',{"class":"replycnt"})
            # if comment==None:
            #    comment=0
            # else:
            #    comment=comment.text
            #    comment=comment[1:len(comment)-1]
            # print("댓글수: ", comment)

            # 추천 수 추출
            #    recommend = i.find_all('td')[-2].text
            #    if recommend == "":
            #        recommend=0
            #    else:
            #        recommend=recommend.split('-')[0].strip()
            #    print("추천수: ", recommend)

            # tmp['분야']=category
            tmp['제목'] = title
            # tmp['글쓴이']=writer
            tmp['날짜'] = date
            # tmp['조회수']=views
            # tmp['댓글수']=comment
            #    tmp['추천수']=recommend

            result.append(tmp)

        try:
            page = driver.find_element_by_xpath('//*[@id="_pageList"]/a[' + str(j) + ']')
            driver.execute_script("arguments[0].click();", page)
            time.sleep(3)
        except:
            #print("dasd")
            break

    df = pd.DataFrame(result)
    parameters['sid1']="sports"
    file_writer(df)
    driver.quit()