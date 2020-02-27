
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
        return num1 + num2;
    },

    subtract: (num1, num2) => {
        return num1 - num2;
    },

    multiply: (num1, num2) => {
        return num1 * num2;
    },
    divide: (num1, num2) => {
        return (num1 / num2);
    },

    
    
};

export default functions;

