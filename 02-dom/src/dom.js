
import domfuncs from './domfunc.js'

console.log(idButton);

let counter = 1;

document.body.addEventListener("click", e => {
    // console.log("You Clicked, at your command");
    // console.log(e.target.textContent);
    // console.log(e.target.nodeName);
    // console.log(e.target);

    if (e.target.nodeName === 'BUTTON') {
        // document.body.appendChild(domfuncs.buildCard("You just added " + counter++));
        console.log(e.target.textContent);
        if (e.target.textContent === "Add Before") {
            domfuncs.addBefore(e.target.parentElement, "You just added " + counter++);
        }
        if (e.target.textContent === "Add After") {
            domfuncs.addAfter(e.target.parentElement, "You just added " + counter++);
        }

        if (e.target.textContent === "Delete") {
            domfuncs.delCard(e.target.parentElement);
        }



    }




    // const div = document.createElement("div");
    // div.className = "clCard";
    // div.appendChild(document.createTextNode("This has been inserted"));

    // idStuff2.insertAdjacentElement("afterend", div);


})





