var xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
        var data=JSON.parse(this.responseText);
        // document.getElementById("orders").
        console.log("front\n"+data)
    }
}

// const orders=document.getElementById('orders');
// for(var i=0;i<10;++i){
//     orders.rows
// }