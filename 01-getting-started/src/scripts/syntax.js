

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
    arrayIndexCheck: (arry) => {// while
        return arry[1];
        // return res;
    },
// dictionary / objects// Objects / Dictionaries
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

    // loops // for
    addToEach: (arr, num) => {
        let i;
        for (i = 0; i < arr.length; i++) {
            arr[i] += num;
        }
        return arr;
    },

// forEach (with array and function)

    toUpperCaseArray: (array) => {
        array.forEach((x, i) => {
            array[i] = x.toUpperCase();
        });
        return array;
    },
// while
    fillArray: (size) => {
        let arr = [];
        let i = 0;
        while (i < size) {
            arr.push(i);
            i++;
        }
        return arr;
    },
// do while
    reduce: (size) => {
        let total = 0, i = 0;
        do {
            total += i;
            i++;
        } while (i <= size)
        return total;;
    },



};

export default syntax;










// while
// lookup key to retrieve value
