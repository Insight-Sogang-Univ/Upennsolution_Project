
var all = document.getElementById('all');
all.addEventListener('click', (e)=>{
    e.preventDefault();
});

var politic = document.getElementById('politic');
politic.addEventListener('click', (e)=>{
    e.preventDefault();
});

var economy = document.getElementById('economy');
economy.addEventListener('click', (e)=>{
    e.preventDefault();
});

var society = document.getElementById('society');
society.addEventListener('click', (e)=>{
    e.preventDefault();
});

var sports = document.getElementById('sports');
sports.addEventListener('click', (e)=>{
    e.preventDefault();
});


var news = document.getElementsByClassName('news');

for (var i = 0; i < news.length; i++) {
    news[i].addEventListener('click', function(){
    for (var j = 0; j < news.length; j++) {
        news[j].style.color = "#afaeae";
    }
    this.style.color = "#232D48";
  })}