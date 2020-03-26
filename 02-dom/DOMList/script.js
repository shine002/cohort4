let add = document.getElementById("add");
let del = document.getElementById("del");

let ol = document.querySelector("ol");

addListElement = () => {
  let input = document.getElementById("input");
  if (input.value !== "") {
    let li = document.createElement("li");
    let textnode = document.createTextNode(input.value);
    li.appendChild(textnode);
    ol.appendChild(li);
    input.value = "";
  }
};

delListElement = () => {
  let li = document.querySelector("li");
  ol.removeChild(li);
};

add.addEventListener("click", function() {
  // console.log("add");
  addListElement();
});

del.addEventListener("click", function() {
  // console.log("remove");
  delListElement();
});

function showHide() {
  // no ';' here
  let show = document.getElementById("show");
  let x = document.getElementById("ol");
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
    show.innerHTML = "Hide";
  } else {
    x.style.visibility = "hidden";
    show.innerHTML = "Show";
  }
}

show.addEventListener("click", function() {
  // console.log("dsdsd");
  showHide();
});
