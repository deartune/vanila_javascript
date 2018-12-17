// JavaScript source code



const changeTitle = document.querySelector('#title')
changeTitle.innerHTML="Js"
changeTitle.style.color="blue";
document.title="vanila_javascript"
//console.log(changeTitle.style);

/*
window.addEventListener("resize",handleResize)
function handleResize(){
    console.log("Your browser resized")
}
*/


window.addEventListener("resize",eventReport)
function eventReport(event){
    console.log(event)
}
window.addEventListener("resize",eventReport)


changeTitle.addEventListener("click",clickEvent)
function clickEvent(){
    changeTitle.style.color="red";
    
}

const age =prompt("How old are you?")

if(age<20){
    console.log("You are teenager")
}
else if(20<=age && age<30){
    console.log("You have beautiful skin")
}else{
    console.log("i recommend some exercise like swimming")
}