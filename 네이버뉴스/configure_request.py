base_url = 'https://news.naver.com/main/list.naver?mode=LSD&mid=sec&sid1='
comment_API_url = 'https://apis.naver.com/commentBox/cbox/web_naver_list_jsonp.json'
react_API_url = 'https://news.like.naver.com/v1/search/contents'

header = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)"'
                  " Chrome/92.0.4515.159 Safari/537.36 "
}

# 컬럼 설정 ( 0 : 컬럼비활성화, 1 : 컬럼활성화)
column_config = {
    "column_url" : 0, # 기사 url
    "column_title": 1,  # 기사 제목
    "column_contents": 1,  # 기사 본문
    "column_press": 0,  # 언론사
    "column_time": 1,  # 기사 입력시간
    "column_author": 0,  # 기자명
    "column_commentnum": 1,  # 댓글수
    "column_reactnum": 1  # 반응수
}


parameters = {
    'sid1': '001',  # 가변 항목 ( 속보:001, 정치:100, 경제:101, 사회:102, 생활/문화:103, 세계:104, IT/과학:105 )
    'date': '00:00:00',
    'page': '1',  # 가변 항목
}
'''
전체 댓글 수 수집 코드에 쓰일 헤더, 파라미터
'''

comment_header = {
    'accept': '*/*',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
    'referer': '', # 가변
    'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
    'sec-ch-ua-mobile': '?0',
    'sec-fetch-dest': 'script',
    'sec-fetch-mode': 'no-cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) '
                  'Chrome/91.0.4472.114 Safari/537.36'
}

comment_parameters = {
    'ticket': 'news',
    'templateId': 'view_politics_m3',
    'pool': 'cbox5',
    'lang': 'ko',
    'country': 'KR',
    'objectId': 'news586,0000028288', #가변
    'categoryId': '',
    'pageSize': '10',
    'indexSize': '10',
    'groupId': '',
    'listType': 'OBJECT',
    'pageType': 'more',
    'page': '1',
    'initialize': 'true',
    'userType': '',
    'useAltSort': 'true',
    'replyPageSize': '20',
    'sort': 'FAVORITE',
    'includeAllStatus': 'true',
}

'''
전체 반응수 수집에 사용될 헤더, 파라미터
'''
react_header = {
    'accept': '*/*',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
    'referer': '', # 가변
    'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
    'sec-ch-ua-mobile': '?0',
    'sec-fetch-dest': 'script',
    'sec-fetch-mode': 'no-cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36'
}

react_parameters = {
    'suppress_response_codes': 'true',
    'q': 'NEWS[ne_018_0005024023]|NEWS_SUMMARY[018_0005024023]|JOURNALIST[31751(period)]|NEWS_MAIN[ne_018_0005024023]', #가변
    'isDuplication': 'false'
}



detail_base_url = 'https://news.naver.com/main/read.naver'
fixed_parameters = 'mode=LSD&mid=shm'

last_page = 999999999         # 변동 페이지 옵션
MAX_articles = 10 * last_page

result_path = '/Users/eon/Downloads'
json_result_path = result_path + '/f1json.json'
csv_result_path = result_path + '/f1csv.csv'
xlsx_result_path = result_path + '/f1xlsx.xlsx'