from crawler import *

from tqdm import tqdm

def get_comment():
    res = req.get(comment_API_url, headers=comment_header, params=comment_parameters)
    js = json.loads(res.text.split('_callback(')[-1].split(');')[0])
    return js['result']['count']['comment']


def get_react():
    react_num = 0
    res = req.get(react_API_url, headers=react_header, params=react_parameters)
    js = json.loads(res.text.split('_callback(')[-1].split(');')[0])

    for i in range(len(js['contents'][0]['reactions'])):
        react_num = react_num + js['contents'][0]['reactions'][i]['count']
    return react_num


def url_parsing(url):
    url_str = str(url)
    url_str1 = url_str.split('?')[1]
    chunk = url_str1.split('&')
    chunk_for_oid = chunk[-2]
    chunk_for_aid = chunk[-1]
    oid = chunk_for_oid.split("=")[1]
    aid = chunk_for_aid.split("=")[1]
    objectId = 'news' + oid + ',' + aid

    q = 'NEWS[ne_' + oid + '_' + aid + ']'

    comment_parameters['objectId'] = objectId
    comment_header['referer'] = url_str
    react_parameters['q'] = q


def make_dataset(news_url, header):
    list_result = []

    for url in tqdm(news_url):
        news = {}
        raw = req.get(url, headers=header)
        article = bs(raw.text, "html.parser")

        url_parsing(url)

        try:
            title = article.find('h3', id='articleTitle').text
            news["기사 제목"] = title
        except AttributeError:
            title = ""
            pass

        try:
            time = article.find('span', class_='t11').text
            news["기사 입력시각"] = time
        except AttributeError:
            time = ""
            pass

        try:
            comment_num = get_comment()
            news["댓글수"] = comment_num
        except AttributeError:
            comment_num = ""
            pass

        try:
            react_num = get_react()
            news["반응수"] = react_num
        except AttributeError:
            react_num = ""
            pass

        list_result.append(news)
    print("scraping task finished")
    return list_result
