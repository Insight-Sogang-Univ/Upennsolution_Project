var express=require('express')
var cron=require('node-cron');
const spawn=require('child_process').spawn;
const fs=require('fs');
var newstemplate=require('./frontend/newstemplate.js');
var hottemplate=require('./frontend/hottemplate.js')

var newsTotal, newsPol, newsEco, newsSoc, newsSpo;
var hotTotal, hotDc, hotCli, hotNate, hotDocu, hotBobe, hotBull, hotPom, hotIns;
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
    hotTotal=JSON.parse(dataJson);

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

    file=fs.readFileSync('./result/보배드림_result.json');
    dataJson=file.toString();
    hotBobe=JSON.parse(dataJson);

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
  const python=spawn('python', ['main.py']);
  python.on('close', ()=>{
    readData();
  });
});

readData();
var app=express();
app.use(express.static('frontend'))

app.listen(5000, function(){
    console.log("start server");
})

function getTable(order){
    return `<tr class='border'>
            <td>1</td>
              <td>${order.index[0]}</td>
              <td>${order.DF[0]}</td>
            </tr>
            <tr class='border'>
              <td>2</td>
              <td>${order.index[1]}</td>
              <td>${order.DF[1]}</td>
            </tr>
            <tr class='border'>
              <td>3</td>
              <td>${order.index[2]}</td>
              <td>${order.DF[2]}</td>
            </tr>
            <tr class='border'>
              <td>4</td>
              <td>${order.index[3]}</td>
              <td>${order.DF[3]}</td>
            </tr>
            <tr class='border'>
              <td>5</td>
              <td>${order.index[4]}</td>
              <td>${order.DF[4]}</td>
            </tr>
            <tr class='border'>
              <td>6</td>
              <td>${order.index[5]}</td>
              <td>${order.DF[5]}</td>
            </tr>
            <tr class='border'>
              <td>7</td>
              <td>${order.index[6]}</td>
              <td>${order.DF[6]}</td>
            </tr>
            <tr class='border'>
              <td>8</td>
              <td>${order.index[7]}</td>
              <td>${order.DF[7]}</td>
            </tr>
            <tr class='border'>
              <td>9</td>
              <td>${order.index[8]}</td>
              <td>${order.DF[8]}</td>
            </tr>
            <tr class='border'>
              <td>10</td>
              <td>${order.index[9]}</td>
              <td>${order.DF[9]}</td>
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
    if(menu==='total')  return hotTotal;
    else if(menu==='Dc')  return hotDc;
    else if(menu==='Docu')  return hotDocu;
    else if(menu==='Nate')  return hotNate;
    else if(menu==='Pom')  return hotPom;
    else if(menu==='Bobe')  return hotBobe;
    else if(menu==='Bull')  return hotBull;
    else if(menu==='Cli')  return hotCli;
    else if(menu==='Ins')  return hotIns;
    else    return hotTotal;
}

app.get('/', function(req, res){
    var orderdata=newsData(req.query.menu);
    var table=getTable(orderdata);
    var html=newstemplate.HTML(table);
    res.send(html);
})

app.get('/news', function(req, res){
    var orderdata=newsData(req.query.menu);
    var table=getTable(orderdata);
    var html=newstemplate.HTML(table);
    res.send(html);
})

app.get('/hot', function(req, res){
    var orderdata=hotData(req.query.menu);
    var table=getTable(orderdata);
    var html=hottemplate.HTML(table);
    res.send(html);
})