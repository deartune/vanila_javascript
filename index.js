// JavaScript source code



const changeTitle = document.querySelector('#title')
changeTitle.innerHTML="Js"
changeTitle.style.color="blue";
document.title="time goes on"
//console.log(changeTitle.style);


window.addEventListener("resize",handleResize)


function handleResize(){
    console.log("Your browse resized")
}