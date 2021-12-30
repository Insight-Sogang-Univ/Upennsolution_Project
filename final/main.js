var express=require('express')
var cron=require('node-cron');
const spawn=require('child_process').spawn;
const fs=require('fs');
var newstemplate=require('./frontend/newstemplate.js');
var hottemplate=require('./frontend/hottemplate.js')

var newsTotal, newsPol, newsEco, newsSoc, newsSpo;
var hotInv, hotDc, hotCli, hotNate, hotDocu, hotBull, hotPom, hotIns;
function readData(){
    var file=fs.readFileSync('./result/001_result.json');
    var dataJson=file.toString();
    newsTotal=JSON.parse(dataJson);
    
    file=fs.readFileSync('./result/100_result.json');
    dataJson=file.toString();
    newsPol=JSON.parse(dataJson);

    file=fs.readFileSync('./result/101_result.json');
    dataJson=file.toString();
    newsEco=JSON.parse(dataJson);

    file=fs.readFileSync('./result/102_result.json');
    dataJson=file.toString();
    newsSoc=JSON.parse(dataJson);

    file=fs.readFileSync('./result/sports_result.json');
    dataJson=file.toString();
    newsSpo=JSON.parse(dataJson);

    file=fs.readFileSync('./result/인벤_result.json');
    dataJson=file.toString();
    hotInv=JSON.parse(dataJson);

    file=fs.readFileSync('./result/dcinside_result.json');
    dataJson=file.toString();
    hotDc=JSON.parse(dataJson);

    file=fs.readFileSync('./result/클리앙_result.json');
    dataJson=file.toString();
    hotCli=JSON.parse(dataJson);

    file=fs.readFileSync('./result/네이트판_result.json');
    dataJson=file.toString();
    hotNate=JSON.parse(dataJson);

    file=fs.readFileSync('./result/더쿠_result.json');
    dataJson=file.toString();
    hotDocu=JSON.parse(dataJson);

    file=fs.readFileSync('./result/bullpen_result.json');
    dataJson=file.toString();
    hotBull=JSON.parse(dataJson);

    file=fs.readFileSync('./result/뽐뿌_result.json');
    dataJson=file.toString();
    hotPom=JSON.parse(dataJson);

    file=fs.readFileSync('./result/instiz_result.json');
    dataJson=file.toString();
    hotIns=JSON.parse(dataJson);
}

cron.schedule('*/30 * * * *', ()=>{
  const python=spawn('python3', ['tmp.py']);
  python.on('close', ()=>{
    readData();
  });
  python.on('error', (err)=>{
    console.log("[debug] error");
    console.log(err);
  });
  python.stdout.on('data', (data)=>{
    console.log(data.toString());
  })
});

function getTable(order){
    return `<tr class='border'>
            <td>1</td>
              <td>${order.index[0]}</td>
              <td>${order.diff[0]}</td>
            </tr>
            <tr class='border'>
              <td>2</td>
              <td>${order.index[1]}</td>
              <td>${order.diff[1]}</td>
            </tr>
            <tr class='border'>
              <td>3</td>
              <td>${order.index[2]}</td>
              <td>${order.diff[2]}</td>
            </tr>
            <tr class='border'>
              <td>4</td>
              <td>${order.index[3]}</td>
              <td>${order.diff[3]}</td>
            </tr>
            <tr class='border'>
              <td>5</td>
              <td>${order.index[4]}</td>
              <td>${order.diff[4]}</td>
            </tr>
            <tr class='border'>
              <td>6</td>
              <td>${order.index[5]}</td>
              <td>${order.diff[5]}</td>
            </tr>
            <tr class='border'>
              <td>7</td>
              <td>${order.index[6]}</td>
              <td>${order.diff[6]}</td>
            </tr>
            <tr class='border'>
              <td>8</td>
              <td>${order.index[7]}</td>
              <td>${order.diff[7]}</td>
            </tr>
            <tr class='border'>
              <td>9</td>
              <td>${order.index[8]}</td>
              <td>${order.diff[8]}</td>
            </tr>
            <tr class='border'>
              <td>10</td>
              <td>${order.index[9]}</td>
              <td>${order.diff[9]}</td>
            </tr>`
}

function newsData(menu){
    if(menu==='total')  return newsTotal;
    else if(menu==='pol')   return newsPol;
    else if(menu==='eco')   return newsEco;
    else if(menu==='soc')   return newsSoc;
    else if(menu==='spo')   return newsSpo;
    else    return newsTotal;
}

function hotData(menu){
    if(menu==='Inv')  return hotInv;
    else if(menu==='Dc')  return hotDc;
    else if(menu==='Docu')  return hotDocu;
    else if(menu==='Nate')  return hotNate;
    else if(menu==='Pom')  return hotPom;
    else if(menu==='Bull')  return hotBull;
    else if(menu==='Cli')  return hotCli;
    else if(menu==='Ins')  return hotIns;
    else    return hotDc;
}

function getNewsMenus(menu){
  var menus="";
  if(menu===newsTotal) menus+=`<th><a href="/news?menu=total" style="color: #232D48!important;">전체</a></th>`;
  else  menus+=`<th><a href="/news?menu=total">전체</a></th>`;
  if(menu===newsPol) menus+=`<th><a href="/news?menu=pol" style="color: #232D48!important;">정치</a></th>`;
  else  menus+=`<th><a href="/news?menu=pol">정치</a></th>`;
  if(menu===newsEco) menus+=`<th><a href="/news?menu=eco" style="color: #232D48!important;">경제</a></th>`;
  else  menus+=`<th><a href="/news?menu=eco">경제</a></th>`;
  if(menu===newsSoc) menus+=`<th><a href="/news?menu=soc" style="color: #232D48!important;">사회</a></th>`;
  else  menus+=`<th><a href="/news?menu=soc">사회</a></th>`;
  if(menu===newsSpo) menus+=`<th><a href="/news?menu=spo" style="color: #232D48!important;">스포츠</a></th>`;
  else  menus+=`<th><a href="/news?menu=spo">스포츠</a></th>`;
  return menus;
}

function getHotMenus(menu){
  var menus="";
  if(menu===hotDc) menus+=`<th><a href="/hot?menu=Dc" style="color: #232D48;">dc</a></th>`;
  else  menus+=`<th><a href="/hot?menu=Dc">dc</a></th>`;
  if(menu===hotCli)  menus+=`<th><a href="/hot?menu=Cli" style="color: #232D48;">클리앙</a></th>`;
  else  menus+=`<th><a href="/hot?menu=Cli">클리앙</a></th>`;
  if(menu===hotNate)  menus+=`<th><a href="/hot?menu=Nate" style="color: #232D48;">네이트판</a></th>`;
  else  menus+=`<th><a href="/hot?menu=Nate">네이트판</a></th>`;
  if(menu===hotDocu)  menus+=`<th><a href="/hot?menu=Docu" style="color: #232D48;">더쿠</a></th>`;
  else  menus+=`<th><a href="/hot?menu=Docu">더쿠</a></th>`;
  if(menu===hotBull)  menus+=`<th><a href="/hot?menu=Bull" style="color: #232D48;">불펜</a></th>`;
  else  menus+=`<th><a href="/hot?menu=Bull">불펜</a></th>`;
  if(menu===hotPom) menus+=`<th><a href="/hot?menu=Pom" style="color: #232D48;">뽐뿌</a></th>`;
  else  menus+=`<th><a href="/hot?menu=Pom">뽐뿌</a></th>`;
  if(menu===hotIns) menus+=`<th><a href="/hot?menu=Ins" style="color: #232D48;">인스티즈</a></th>`;
  else  menus+=`<th><a href="/hot?menu=Ins">인스티즈</a></th>`;
  if(menu===hotInv) menus+=`<th><a href="/hot?menu=Inv" style="color: #232D48;">인벤</a></th>`;
  else  menus+=`<th><a href="/hot?menu=Inv">인벤</a></th>`;
  return menus;
}

readData();

var app=express();
app.use(express.static('frontend'))

app.listen(5000, function(){
    console.log("start server: localhost:5000");
})

app.get('/', function(req, res){
    var orderdata=newsData(req.query.menu);
    var table=getTable(orderdata);
    var menus=getNewsMenus(orderdata);
    var html=newstemplate.HTML(table, menus);
    res.send(html);
})

app.get('/news', function(req, res){
    var orderdata=newsData(req.query.menu);
    var table=getTable(orderdata);
    var menus=getNewsMenus(orderdata);
    var html=newstemplate.HTML(table, menus);
    res.send(html);
})

app.get('/hot', function(req, res){
    var orderdata=hotData(req.query.menu);
    var table=getTable(orderdata);
    var menus=getHotMenus(orderdata);
    var html=hottemplate.HTML(table, menus);
    res.send(html);
})