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


//   renameAccount (name,newName) {
//   // iterate through all accounts in the account array for the 'name' account. Give this account the newName.
//       for (let i=0;i<this.accountArr.length;i++){
//           let val = Object.values(this.accountArr[i]); 
//           if (val.includes(name)) {
//               this.accountArr[i].name= newName;
//           } 
//       }
//   }
//   totalAccounts () {
//       // iterate through all acocunts in account array, find balance, sum them all up
//       let sum=0;
//       for (let i=0;i<this.accountArr.length;i++){
//           let bal = this.accountArr[i].balance;
//           // console.log(this.accountArr[i].balance)
//           sum= sum+bal;            
//           }
//       return sum;    
//   }
//   highlightAccountWithHighestValue (){
//       let arrayHighest =0;
//       for (let i=0;i<this.accountArr.length;i++){
//           let high = this.accountArr[0].balance;
//           let current = this.accountArr[i].balance;
//           if (high< current) {
//               high =current;
//               arrayHighest = i;
//           }
//       }
//       return arrayHighest;
//   }
//   highlightAccountWithLowestValue () {
//       let arrayLowest =0;
//       for (let i=0;i<this.accountArr.length;i++){
//           let low = this.accountArr[0].balance;
//           let current = this.accountArr[i].balance;
//           if (low> current) {
//               low =current;
//               arrayLowest = i;
//           }
//       }
//       return arrayLowest;
//   }
// }


// export default {Account, };