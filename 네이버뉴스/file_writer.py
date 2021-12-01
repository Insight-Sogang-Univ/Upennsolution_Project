from configure_request import *
import pandas as pd


def file_writer(result_data):
    rdf = pd.DataFrame(result_data)
    # excel
    rdf.to_excel(str(parameters['sid1'])+'_test.xlsx', index=False)

    # json
    # with open('test.json', 'w', encoding='utf-8') as file:
    #     rdf.to_json(file, force_ascii=False)