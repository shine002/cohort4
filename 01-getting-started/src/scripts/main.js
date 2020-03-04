import functions from './functions.js'
import tax from './tax.js'
import array from './array.js'
import obj from './object.js'

// **********
//
// Add the event listeners
// 

// idNumber.addEventListener('change', (() => {
//     idNumberSize.textContent = functions.size(idNumber.value);
// }));

// Calculator**********************************************************************************************************************************************

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let btnAdd = document.getElementById("btnAdd");
let btnSub = document.getElementById("btnSub");
let btnMul = document.getElementById("btnMultiply");
let btnDiv = document.getElementById("btnDivide");
let result1 = document.getElementById("result1");

btnAdd.addEventListener("click",function() {
     result1.value = functions.add(num1.value,num2.value);
});

btnSub.addEventListener("click",function() {
     result1.value = functions.subtract(num1.value,num2.value);
});
    

btnMul.addEventListener("click",function() {
     result1.value  = functions.multiply(num1.value,num2.value);
});


btnDiv.addEventListener("click",function() {
     result1.value  = functions.divide(num1.value,num2.value);
});

// Canada Tax.***********************************************************************************************************************************

let num = document.getElementById("input");
let button = document.getElementById("button");
let result = document.getElementById("result");


button.addEventListener("click",function() {
    result.value = tax.taxCalculator(num.value);    
})

//Array************************************************************************************************************************************************** */

let element = document.getElementById("element");
let total = document.getElementById("total");
let add = document.getElementById("add");
let show = document.getElementById("show");
let clear = document.getElementById("clear");
let output = document.getElementById("output");


add.addEventListener("click",function() {
     output.innerHTML = array.createArray(element.value); 
     element.value ="";  
 })

clear.addEventListener("click",function() {
     output.innerHTML = array.clearArray();    
 })

 show.addEventListener("click",function() {
     output.innerHTML = array.showArray();    
 })
 
 total.addEventListener("click",function() {
     output.innerHTML = array.addArray();    
 })
 
 //Object Dicionaires*************************************************

let pCode = document.getElementById("pCode");
let search = document.getElementById("search");
let pName = document.getElementById("pName");


search.addEventListener("click",function() {
     pName.value = obj.searchObj(pCode.value);    
})