from configure_request import *
import pandas as pd
import datetime
def merge(recent):

    try:
        df_before = pd.read_excel('data/'+str(parameters['sid1']) + '_test.xlsx')
        df_before['날짜'] = df_before.apply(lambda x: datetime.datetime.strptime(x['날짜'], "%Y.%m.%d %H:%M"), axis=1)
        now = datetime.datetime.now()
        #저장되는 데이터 시간
        df = df_before[(now - datetime.timedelta(hours=12) < df_before['날짜']) & (df_before['날짜'] < now)]
        df['날짜'] = df.apply(lambda x: str(x['날짜']).replace('-','.')[0:-3], axis=1)
        df_new = pd.concat([df, recent])
    except:
        df_new=recent


    return df_new

def file_writer(result_data):

    rdf = pd.DataFrame(result_data)

    df_new=merge(rdf)

    # excel
    df_new.to_excel('data/'+str(parameters['sid1'])+'.xlsx', index=False)
