class Account {
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


export default {Account};