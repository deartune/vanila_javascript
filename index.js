// JavaScript source code



const title = document.querySelector('#title');

/*
function handleClick() {
    const currentClass = title.className;

    if (currentClass == "clicked") {
        title.className= ""       
    } else {
        title.className= "clicked"
    }

}
*/


function handleClick() {
    const hasClass = title.classList.contains("clicked");

    if (hasClass) {
        title.classList.remove("clicked");
    } else {
        title.classList.add("clicked");
    }

}




function changeColor() {
    title.addEventListener("click", handleClick);
}

changeColor();


