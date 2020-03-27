class Account {
  constructor(accountName, initialBalance) {
    this.accountName = accountName;
    this.initialBalance = initialBalance;
  }
  deposit(amount) {
    return this.initialBalance + amount;
  }

  withdraw(amount) {
    return this.initialBalance - amount;
  }

  balance() {
    return this.initialBalance; 
  }

  aName() {
    return this.accountName;
  }
}

export default {Account};