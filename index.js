var ran1= 0;
var ran2= 0;
while(ran1==ran2){
    
    ran1=Math.floor(Math.random()*6)+1;
    ran2=Math.floor(Math.random()*6)+1;
}
document.getElementsByClassName("die"+ran1)[0].style.visibility="visible";
document.getElementsByClassName("die"+ran2)[1].style.visibility="visible";

var h1 = document.getElementsByTagName("h1")[0];
if(ran1>ran2){
    h1.innerText="Player 1 Wins!!!";
}
else{
    h1.innerText="Player 2 Wins!!!";
}