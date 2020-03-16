class Account {

    constructor(accountName, initialBalance){
        this.accountName = accountName;
        this.initialBalance = initialBalance;

    }
    deposit(amount){

        currentBalance = this.initialBalance + amount;
    }

    withdraw(amount) {
        currentBalance = this.initialBalance - amount;

    }

    balance(){
        return this.currentBalance;
    }

}