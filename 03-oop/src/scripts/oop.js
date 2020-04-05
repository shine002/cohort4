export class Account {
  constructor(accountName, amount) {
    this.accountName = accountName;
    this.amount = amount;
 
  }
  deposit(tAmount) {
    this.amount =  this.amount + tAmount;
    return this.amount;
  }

  withdraw(tAmount) {
    this.amount = this.amount - tAmount;
    return this.amount;
  }
}

export class AccountController {
  constructor (){
      this.accountArr=[];
  }
  addAccount (name){
      let newAccount= new Account(name,0);
      this.accountArr.push(newAccount); 
  }
}




export default {Account};