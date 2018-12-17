// JavaScript source code



const title = document.querySelector('#title');




function handleClick() {
    const hasClass = title.classList.contains("clicked");

 
        title.classList.toggle("clicked");


}




function changeColor() {
    title.addEventListener("click", handleClick);
}

changeColor();


