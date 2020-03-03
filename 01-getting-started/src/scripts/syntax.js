

// number
const syntax = {

    isAnumber: (num) => {
        return(typeof num === 'number')
    },

    isItHello: (str) => {
        return (str === "Hello")
    },
// sample if / else// parameters// functions// returns//boolean


    ANDlogicCheck: (a,b) => {

        if (a&&b !==true && a&&b !==false){
            var c = "Invalid Input";
          } else {
            var c = (a&&b);
          }
        return c;      
    },
// array
    arrayIndexCheck: (arry) => {
        return arry[1];
        // return res;
    },
// dictionary / objects
    personAgeCheck: (obj) => {
        var person = obj;
        return person.age;
          
    },
// undefined
    undefinedCheck: (input) => {
		if (typeof input == "undefined"){
			return true;
		}
		return false;
    },
    
    addToEach: (arr, num) => {
        let i;
        for (i = 0; i < arr.length; i++) {
            arr[i] += num;
        }
        return arr;
    },
    
    toUpperCaseArray: (array) => {
        array.forEach((x, i) => {
            array[i] = x.toUpperCase();
        });
        return array;
    },



};

export default syntax;












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
