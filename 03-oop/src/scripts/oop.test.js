import oop from "./oop.js";

test("Test OOP Class ", () => {
  // let newAcc = new account("newACC", 56);

  console.log(oop.Account);
  let newac = new oop.Account("shine", 56);
  console.log(newac);

  console.log(newac.withdraw(34));
  console.log(newac.accountName);
  console.log(newac.amount);
  
});
