




const functions = {
    
    size: (num) => {
        if (num < 10) return "small";
        if (num < 20) return "medium";
        return "large";
    },
    isEven:(input) => { 
        return (input%2 == 0);    
    },

// Calulator Part
    
    
    add: (num1, num2) => {
        var result = parseInt(num1) +  parseInt(num2);
        equal.value = result;
        return result;
    },

    subtract: (num1, num2) => {
        var result = parseInt(num1) - parseInt(num2);
        equal.value = result;
        return result;
    },

    multiply: (num1, num2) => {
        var result = parseInt(num1) * parseInt(num2);
        equal.value = result;
        return result;
    },
    
    divide: (num1, num2) => {
        var result = parseInt(num1) / parseInt(num2);
        equal.value = result;
    },   
};



var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var btnAdd = document.getElementById("btnAdd");
var btnSub = document.getElementById("btnSub");
var btnMul = document.getElementById("btnMultiply");
var btnDiv = document.getElementById("btnDivide");
var equal = document.getElementById("result");




btnAdd.addEventListener("click",function() {
    functions.add(num1.value,num2.value);
});

btnSub.addEventListener("click",function() {
    functions.subtract(num1.value,num2.value);
});
    

btnMul.addEventListener("click",function() {
    functions.multiply(num1.value,num2.value);
});


btnDiv.addEventListener("click",function() {
    functions.divide(num1.value,num2.value);
});


// export default functions;