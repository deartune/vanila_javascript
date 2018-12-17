// JavaScript source code



const title = document.querySelector('#title');
const baseColor = "red";
const blueColor = "blue";

function handleClick() {
    const currentColor = title.style.color;

    if (currentColor == baseColor) {
        title.style.color = blueColor;
        console.log("blue");
    } else {
        title.style.color = baseColor;
        console.log("base");
    }

}


function changeColor() {
    title.style.color = baseColor;
    title.addEventListener("click", handleClick);
}

changeColor();




function handleOnline(){
    console.log("Online congratulrations!")
}
function handleOffline(){
    console.log("Good Bye!")
}
window.addEventListener("online",handleOnline);
window.addEventListener("offline",handleOffline);