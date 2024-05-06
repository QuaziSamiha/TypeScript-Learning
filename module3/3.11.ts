{
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

    public getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this._balance = 9;
    }
  }

  const poorAccount = new BankAccount(111, "Samu", 20);
  poorAccount.addDeposit(0);
  const myBalance = poorAccount.getBalance();
  console.log(myBalance);
  //
}
