module.exports={
    HTML:function(table, menus){
        return `<!DOCTYPE html>
        <html lang="ko">
          <head>
            <meta charset="utf-8">
            <title>키워드 순위</title>
            <link rel="stylesheet" href="style.css">
          </head>
          <body>
            <div class='center white'>
              <h1><a class='white' id="hot" href="/hot">핫이슈 키워드 순위</a>
                &nbsp&nbsp&nbsp<a class='whitsse' id="news" href="/news" target="_self">뉴스 기반 키워드 순위</a></h1>
            </div>
        
            <div>
            <table class='center'>
                <tr>
                ${menus}
                </tr>
              </table>
            </div>
        
            <div>
              <h2 style="text-align:left;">핫이슈 키워드 순위</h2>
              <p style="text-align:left;">
                2021년 12월 27일 월요일 00:00<br>
                30분 후 갱신됩니다
              </p>
              <p style="text-align:left;">업데이트</p>
            </div>
        
            <div>
              <table class='center border'>
                <tr class='border backgray'>
                  <th><font color="white">#</font></th>
                  <th>키워드</th>
                  <th>순위 변동</th>
                </tr>
                ${table}
              </table>
            </div>
          </body>
        </html>`;
    }
}