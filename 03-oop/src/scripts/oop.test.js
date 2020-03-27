import {Account} from './oop.js'

test ('Test OOP Class ',() => {

    // let newAcc = new account("newACC", 56);

    console.log(Account);
    let newac = new Account("shine",56);
    console.log(newac);
    newac.withdraw(34);
    console.log(newac.balance());

});