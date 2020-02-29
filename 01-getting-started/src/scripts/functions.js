




const functions = {
    
    // size: (num) => {
    //     if (num < 10) return "small";
    //     if (num < 20) return "medium";
    //     return "large";
    // },
    // isEven:(input) => { 
    //     return (input%2 == 0);    
    // },

// Calulator Part
    isAnumber: (num1, num2) => {
        return(typeof num1 === 'number' && typeof num2 === 'number');
    },

    add: (num1, num2) => {
        result = num1 + num2;
        document.getElementById("result").innerHTML = result;

    },

    subtract: (num1, num2) => {
        var result= num1 - num2;
        return result;
    },

    multiply: (num1, num2) => {
        var result = num1 * num2;
        re
    },
    divide: (num1, num2) => {
        return (num1 / num2);
    },   
};

// export default functions;
var num1 = document.getElementById("num1")
var num2 = document.getElementById("num2")

document.getElementById("btnAdd").addEventListener("click",function() {
    functions.add(num1.value,num2.value);
    

});
