
var num = 0;

setInterval(function(){
 num++;

var dot_lis = document.querySelectorAll('.dot_li');

for(var i=0; i < dot_lis.length; i++){
    dot_lis[i].style.display='none';
}
if (num==5){
    num=0;
}
dot_lis[num].style.display='block';
},2000);

