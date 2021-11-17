from configure_request import *
import pandas as pd


def file_writer(result_data):
    rdf = pd.DataFrame(result_data)
    # excel
    rdf.to_excel('test.xlsx', index=False)