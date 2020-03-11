

let addCard = document.getElementById("addCard");
let div1 = document.querySelector("div") 
addCard.addEventListener("click", function(){
    console.log("Add card")
    div1.appendChild(buildCard("New Card"));    
})

buildCard = (text) => {

    const div = document.createElement('div');
    div.appendChild(document.createTextNode(text));

    const add = document.createElement('button');
    add.appendChild(document.createTextNode("Add Before"));
    div.appendChild(add);

    const before = document.createElement('button');
    before.appendChild(document.createTextNode("Add After"));
    div.appendChild(before);

    const del = document.createElement('button');
    del.appendChild(document.createTextNode("Delete"));
    div.appendChild(del);

    return div;
}