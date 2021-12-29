import pandas as pd
import re
import konlpy
import tweepy
import matplotlib.pyplot as plt
import seaborn as sns
from matplotlib import font_manager, rc
import numpy as np
from tqdm import tqdm
from konlpy.tag import Hannanum
import urllib.request
import warnings
warnings.filterwarnings("ignore")

def text_preprocess(x):
    text = []
    a = re.sub('[^가-힣0-9a-zA-Z\\s]', '', str(x))
    for j in a.split():
        text.append(j)
    return ' '.join(text)

def tokenize(x):
    text = []
    okt = konlpy.tag.Okt()
    tokens = okt.pos(x)
    for token in tokens:
        # if token[1] == 'Adjective' or token[1]=='Adverb' or token[1] == 'Noun' or token[1] == 'Verb' or 'Unknown':
        if token[1] == 'Noun':
            if len(token[0]) > 1:
                text.append(token[0])
    return text

def get(x):
    result = ""
    for i in x:
        if len(i) > 1:

            i = i.replace("jpg", "")
            if "갤" in i:
                continue
            result = result + " " + i
    return result

def count_df(t,df):
    count=0
    for i in range(len(df)):
        for j in df.loc[i,'token']:
            if j==t:
                count=count+1
    return count

def anal(file):
    hannanum = Hannanum()
    result = []
    try:
        df = pd.read_excel('data/' + file + '.xlsx')
        df['token'] = df['제목'].apply(lambda x: text_preprocess(x))
        df['token'] = df['token'].apply(lambda x: hannanum.nouns(x))
        df['data'] = df['token'].apply(lambda x: get(x))
        vocab = list(set(w for doc in df['data'] for w in doc.split()))
        vocab.sort()
        for i in range(len(vocab)):
            tmp={}
            t = vocab[i]
            tmp['index']=t
            tmp['DF']=count_df(t, df)
            tmp['diff']="-"
            result.append(tmp)
        result = pd.DataFrame(result)
        result = result.sort_values(by=['DF'], ascending=False)
        result = result.head(10)
    except:
        pass


    try:
        result_before=pd.read_excel('result/'+file+'_result.xlsx')
        ###  순위 상승 -> 음수   ///  순위 하락 -> 양수
        #print(file)
        for i in range(len(result)):
            word = result.iloc[i, 0]
            #print(word)
            for j in range(len(result_before)):
                tmp = result_before.loc[j, 'index']
                #print(tmp)
                if word == tmp:
                    if i-j <0:
                        result.iloc[i, 2] = str(j-i)+"위 상승"
                    elif i-j ==0:
                        result.iloc[i, 2] = "-"
                    else:
                        result.iloc[i, 2] = str(i - j) + "위 하락"
                else:
                    pass
        result = result.reset_index(drop=True)
        result = result.head(10)
    except:
        result_before = pd.read_excel('result/' + file + '_result.xlsx')
        result = result_before.copy()

    # excel
    result.to_excel('result/'+file+'_result.xlsx')
    # json
    with open('result/'+file+'_result.json', 'w', encoding='utf-8') as file:
        result.to_json(file, force_ascii=False)