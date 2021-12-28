from crawler import get_news_url
from scraper import make_dataset
from sports import sports
from file_writer import *
from analysis import *
from community import *
if __name__ == "__main__":
    #네이버 뉴스 크롤링
    # for i in ['001','100','101','102']:
    #     parameters['sid1']=i
    #     naver_news_url = get_news_url()
    #     result_dict = make_dataset(naver_news_url, header)
    #     file_writer(result_dict)
    # #해외축구 크롤링
    # sports()
    # #커뮤니티 크롤링
    # community()

    #분석
    for sid in ['인벤']:   #'001','100','101','102','sports','dcinside','클리앙','네이트판','더쿠','보배드림','bullpen','뽐뿌','instiz',
        anal(sid)
        #print(sid+" anal finish")