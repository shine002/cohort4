class Account {
  constructor(accountName, initialBalance) {
    this.accountName = accountName;
    this.initialBalance = initialBalance;
 
  }
  deposit(amount) {
    let currentBalance =  this.initialBalance + amount;
    return currentBalance;
  }

  withdraw(amount) {
    let currentBalance = this.initialBalance - amount;
    return currentBalance;
  }

  balance() {
    return this.currentBalance; 
  }

  aName() {
    return this.accountName;
  }
}

export default {Account};