{
  // 06.05.24
  // access modifiers
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    // getter
    get Balance() {
      return this._balance;
    }
    // public getBalance() {
    //   return this._balance;
    // }
  }

  class StudentAccount extends BankAccount {
    test() {
      this._balance = 9;
    }
  }

  const poorAccount = new BankAccount(111, "Samu", 20);
  poorAccount.addDeposit(20);
//   const myBalance = poorAccount.getBalance();
  const myBalance = poorAccount.Balance; // calling function like a property
  console.log(myBalance);
  //
}
