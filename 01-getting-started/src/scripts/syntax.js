// define attributes / variables
// number


const syntax = {

    isAnumber: (num) => {
        return(typeof num === 'number')
    },

    isItHello: (str) => {
        return (str === "Hello")
    },

    ANDlogicCheck: (a,b) => {

        if (a&&b !==true && a&&b !==false){
            var c = "Invalid Input";
          } else {
            var c = (a&&b);
          }
        return c;      
    },

    arrayIndexCheck: (arry) => {
        return arry[1];
        // return res;
    },


};

export default syntax;


// array
// dictionary / objects
// undefined

// sample if / else

// functions
// parameters
// returns

// arrays
// add to the front
// add to the end
// update values
// loops 

// for
// for/in
// while
// do while
// forEach (with array and function)

// Objects / Dictionaries
// declare object
// lookup key to retrieve value
