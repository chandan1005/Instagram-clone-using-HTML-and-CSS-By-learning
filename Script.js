let btn1=document.querySelector("#btn1");
let time=document.querySelector("#time");
let body=document.querySelector("body");
let mode="light";
//using event listener
btn1.addEventListener("click", () =>{
    if(mode==="light"){
        mode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        mode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(mode);
});
// let design= () =>{document.querySelector("button").style.color="red";}
btn1.addEventListener("mouseover",()=>{
});
// btn1.removeEventListener("mousemove",design);
time.addEventListener("fullscreenchange",()=>{
    body.style.backgroundColor="yellow";
    console.log("yellow");
});
