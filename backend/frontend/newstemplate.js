module.exports={
    HTML:function(table){
        return `<!DOCTYPE html>
        <html lang="ko">
          <head>
            <meta charset="utf-8">
            <title>키워드 순위</title>
            <link rel="stylesheet" href="style.css">
            <script src="main.js">
              document.addEventListener('click', function() {alert('Clicked!');});
            </script>
                    
          </head>
          <body>
            <div class='center white'>
              <h1><a class='whitsse' href="/hot">핫이슈 키워드 순위</a>
                &nbsp&nbsp&nbsp<a class='white' href="/news" target="_self">뉴스 기반 키워드 순위</a></h1>
            </div>
        
            <div>
            <table class='center' id='bars'>
                <tr>
                  <th><a class = 'site' href="/news?menu=total">전체</a></th>
                  <th><a href="/news?menu=pol">정치</a></th>
                  <th><a href="/news?menu=eco">경제</a></th>
                  <th><a href="/news?menu=soc">사회</a></th>
                  <th><a href="/news?menu=spo">스포츠</a></th>
                </tr>
              </table>
            </div>
        
            <div>
              <h2 style="text-align:left;">뉴스 기반 키워드 순위</h2>
              <p style="text-align:left;">
                2021년 12월 27일 월요일 00:00<br>
                30분 후 갱신됩니다
              </p>
              <p style="text-align:left;">업데이트</p>
            </div>
        
            <div>
              <table class='center border' id="orders">
                <tr class='border backgray'>
                  <th><font color="white">#</font></th>
                  <th>키워드</th>
                  <th>순위 변동</th>
                </tr>
                ${table}
              </table>
            </div>
        
          </body>
        </html>
        `;
    }
}