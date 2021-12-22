from configure_request import *
import pandas as pd
import datetime
def merge(recent):

    min=30
    df_before=pd.read_excel(str(parameters['sid1'])+'_test.xlsx')
    df_before['날짜']=df_before.apply(lambda x: datetime.datetime.strptime(x['날짜'],"%Y.%m.%d %H:%M"),axis=1)
    now = datetime.datetime.now()
    df = df_before[(now - datetime.timedelta(hours=2,minutes=min) < df_before['날짜']) & (df_before['날짜'] < now)]
    df['날짜'] = df.apply(lambda x: str(x['날짜']).replace('-','.')[0:-3], axis=1)
    print(len(df))
    df_new=pd.concat([df,recent])

    return df_new

def file_writer(result_data):

    rdf = pd.DataFrame(result_data)

    df_new=merge(rdf)

    # excel
    df_new.to_excel(str(parameters['sid1'])+'_test_merge.xlsx', index=False)

    # json
    # with open('test.json', 'w', encoding='utf-8') as file:
    #     rdf.to_json(file, force_ascii=False)