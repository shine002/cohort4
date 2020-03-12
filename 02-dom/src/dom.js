
import domfuncs from './domfunc.js'



let counter = 1;



document.body.addEventListener("click", e => {


    if (e.target.nodeName === 'BUTTON') {
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
})





