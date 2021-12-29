var hot = document.getElementById('hot');
hot.addEventListener('click', (e)=>{
    location.href = "hot.html";
});


var news = document.getElementById('news');
news.addEventListener('click', (e)=>{
    location.href = "news.html";
});




var inven = document.getElementById('inven');
inven.addEventListener('click', (e)=>{
    e.preventDefault();
});

var dc = document.getElementById('dc');
dc.addEventListener('click', (e)=>{
    e.preventDefault();
});


var clien = document.getElementById('clien');
clien.addEventListener('click', (e)=>{
    e.preventDefault();
});

var nate = document.getElementById('nate');
nate.addEventListener('click', (e)=>{
    e.preventDefault();
});

var theqoo = document.getElementById('theqoo');
theqoo.addEventListener('click', (e)=>{
    e.preventDefault();
});

var bobae = document.getElementById('bobae');
bobae.addEventListener('click', (e)=>{
    e.preventDefault();
});

var bull = document.getElementById('bull');
bull.addEventListener('click', (e)=>{
    e.preventDefault();
});

var ppomppu = document.getElementById('ppomppu');
ppomppu.addEventListener('click', (e)=>{
    e.preventDefault();
});

var instiz = document.getElementById('instiz');
instiz.addEventListener('click', (e)=>{
    e.preventDefault();
});






var com = document.getElementsByClassName('com');

for (var i = 0; i < com.length; i++) {
    com[i].addEventListener('click', function(){
    for (var j = 0; j < com.length; j++) {
        com[j].style.color = "#afaeae";
    }
    this.style.color = "#232D48";
  })}
