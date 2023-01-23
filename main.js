// q1 sol
document.getElementById('text').innerHTML='i have text id'
// q2 sol
let htag=document.querySelector('h1');
htag.innerHTML ='new h1 tag';
// q3 sol
let newdiv=document.querySelector(".box");
newdiv.innerHTML="i am having class name as a box";
// q4 sol
document.querySelector("h1").innerText="Hello World";
// q5 sol
let dir=document.querySelector('#dir');
dir.addEventListener('click',function(){
    let direction= document.querySelector('.mainFlex');
    if(direction.style.flexDirection =="column"){
        direction.style.flexDirection='row';
    }else{
    direction.style.flexDirection='column';}
})
// q6 sol
let h1tag=document.querySelectorAll("h1")[2];
h1tag.setAttribute("id","heading");
h1tag.style.color="red"
// q7 sol
document.querySelector("#chngbtn").addEventListener('click',function(){
    document.querySelector("#chngtext").innerText="Welcome to Elevation Academy";
})

function clock(){
    let time= new Date();
    let hour= time.getHours();
    let min= time.getMinutes();
    let sec= time.getSeconds();

    document.getElementById('hh').innerHTML=hour + ":";
    document.getElementById('mm').innerHTML=min + ":";
    document.getElementById('ss').innerHTML=sec;
}
setInterval(clock,1000);

function value(){
    let sel=document.getElementById("years");
    let msg= sel.options[sel.selectedIndex].text;
    document.querySelector("#selValue").innerHTML=msg;
}
document.querySelector("#selBtn").addEventListener('click',function(){
    value();
})