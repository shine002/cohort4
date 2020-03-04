



let arr = [];

const array = {


    createArray: (value) => {

        if ((isNaN(value) == true) || (value == "")) {
            return "Invalid Input";
        }
        else {
            arr.push(value);
            return "Input Added";
        }
    },

    addArray: (value) => {
        return (arr.reduce((a, b) => a + +b, 0))
    },
    showArray: (value) => {
        if (arr == "") {
            return "Array is Empty";
        } else {
            return arr;
        }
    },

    clearArray: (value) => {
        arr = [];
        return "Array Cleared"
    },
}


export default array;