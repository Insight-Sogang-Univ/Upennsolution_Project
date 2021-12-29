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
              <h1><a class='white' href="/hot">핫이슈 키워드 순위</a>
                &nbsp&nbsp&nbsp<a class='whitsse' href="/news" target="_self">뉴스 기반 키워드 순위</a></h1>
            </div>
        
            <div>
            <table class='center'>
                <tr>
                  <th><a class ='site' href="/hot?menu=total">전체</a></th>
                  <th><a href="/hot?menu=Dc">dc</a></th>
                  <th><a href="/hot?menu=Cli">클리앙</a></th>
                  <th><a href="/hot?menu=Nate">네이트판</a></th>
                  <th><a href="/hot?menu=Docu">더쿠</a></th>
                  <th><a href="/hot?menu=Bobe">보배드림</a></th>
                  <th><a href="/hot?menu=Bull">불펜</a></th>
                  <th><a href="/hot?menu=Pom">뽐뿌</a></th>
                  <th><a href="/hot?menu=Ins">인스티즈</a></th>
        
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