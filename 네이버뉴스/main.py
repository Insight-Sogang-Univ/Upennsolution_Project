from crawler import get_news_url
from scraper import make_dataset
from file_writer import *

if __name__ == "__main__":
    print("Naver Category Crawling program start")
    naver_news_url = get_news_url()
    result_dict = make_dataset(naver_news_url, header)
    file_writer(result_dict)
    print("Naver Category Crawling program finished")

