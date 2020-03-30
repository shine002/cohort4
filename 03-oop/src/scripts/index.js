import {Account,AccountController} from "./oop.js";


let aName = document.getElementById("aName"); //account name
let iAmount = document.getElementById("iAmount"); //initial amount
let addAccBtn = document.getElementById("addAccBtn"); //account add button
let tAmount = document.getElementById("tAmount"); // transcation withdrawal and add amount
let withdraw = document.getElementById("withdraw"); //Withdraw button
let deposit = document.getElementById("deposit"); // deposit button
let demo = document.getElementById("demo"); // Display demo
console.log(aName);
console.log(iAmount);
console.log(addAccBtn);
console.log(tAmount);
console.log(withdraw);
console.log(deposit);

addAccBtn.addEventListener("click", e => {
  console.log(aName.value);
  console.log(iAmount.value);
  let ac = aName.value;
  let ia = iAmount.value;

  ac = new AccountController(ac, ia);
  console.log(ac.amount);
  console.log(ac.accountName);
  let h = document.createElement("H3");
  let t = document.createTextNode(`${ac.accountName}   : $ ${ac.amount} `);
  h.appendChild(t);
  demo.appendChild(h);
});
