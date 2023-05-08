import "colors";

class BankAccount {
  id: number;
  public name: string;
  private balance: number;
  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }
  getBalance(): number {
    return this.balance;
  }

  get balance2() {
    return this.balance;
  }
  set deposit(amount: number) {
    this.balance = this.balance + amount;
  }
}

class StudentAccount {}

const myAccount = new BankAccount(444, "Germany", 44);
// myAccount.balance = 0;
myAccount.getBalance();

// console.log(myAccount);
console.log(myAccount.getBalance());

myAccount.deposit = 300;
console.log(myAccount.balance2, "balance");
