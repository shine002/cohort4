import { Account } from './object.js'


let aName = document.getElementById("aName"); //account name
let iAmount = document.getElementById("iAmount"); //initial amount
let addAccBtn = document.getElementById("addAccBtn"); //account add button
let tAmount = document.getElementById("tAmount"); // transcation withdrawal and add amount 
let withdraw = document.getElementById("withdraw"); //Withdraw button
let deposit = document.getElementById("deposit"); // deposit button



// console.log(aName);
// console.log(iAmount);
// console.log(addAccBtn);
// console.log(tAmount);
// console.log(withdraw);
// console.log(deposit);


addAccBtn.addEventListener("click", function(){

    Account(aName.value , iAmount.value);
    console.log(Account);
    
})