let btn1=document.querySelector("#btn1");
let time=document.querySelector("#time");
let h=document.querySelector("#h1");
let body=document.querySelector("body");
let mode="light";
//using event listener
// for changing mode code
btn1.addEventListener("click", () =>{
    if(mode==="light"){
        mode="dark";
        body.classList.add("dark");
        h1.style.color="chartreuse";
        body.classList.remove("light");
    }else{
        mode="light";
        body.classList.add("light");
        h1.style.color="lightblue";
        body.classList.remove("dark");
    }
    console.log(mode);
});
// using events for changing color while mouse focus
time.addEventListener("mouseover",()=>{
    time.style.backgroundColor="lightblue";
});
time.addEventListener("mouseout",()=>{
    time.style.backgroundColor="";
});
//using time
window.onload=function(){getTime();}
function getTime(){  
var today=new Date();  
var h=today.getHours();  
var m=today.getMinutes();  
var s=today.getSeconds(); 
var date=new Date();  
var day=date.getDate();  
var month=date.getMonth()+1;  
var year=date.getFullYear();   
// add a zero in front of numbers<10  
m=checkTime(m);  
s=checkTime(s);  
document.getElementById('time').innerHTML="Time:"+h+":"+m+":"+s+" Date:"+day+"/"+month+"/"+year;    
setTimeout(function(){getTime()},1000);  
}  
//setInterval("getTime()",1000);//another way  
function checkTime(i){  
if (i<10){  
  i="0" + i;  
 }  
return i;  
}  
