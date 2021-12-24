from crawler import get_news_url
from scraper import make_dataset
from sports import sports
from file_writer import *
from analysis import *
if __name__ == "__main__":
    print("Naver Category Crawling program start")
    for i in ['001','100','101','102']:
        parameters['sid1']=i
        naver_news_url = get_news_url()
        result_dict = make_dataset(naver_news_url, header)
        file_writer(result_dict)
    sports()
    for sid in ['001','100','101','102','sports']:
        anal(sid)
    print("Naver Category Crawling program finished")

