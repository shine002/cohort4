let add = document.getElementById("add");
let ol = document.querySelector("ol");
let show = document.getElementById("show");
let li = document.createElement("li");

addListElement = () => {

li.appendChild(document.createTextNode("Testing"));
}


showElement = () => {
    ol.appendChild(li);
}


add.addEventListener("click", function (){
    console.log("add");
addListElement()
});

show.addEventListener("click", function (){
    console.log("show");
    showElement()
});