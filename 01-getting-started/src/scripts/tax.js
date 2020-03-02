var input = document.getElementById("input");
var button = document.getElementById("button");

button.addEventListener("click",function() {
    console.log("works");
});


const tax = {

    taxCalculator: (num) => {
        if (num <=48535) return (num/15*100);
        if (num > 20) return "medium";
        return "large";
    },

};

// export default tax;