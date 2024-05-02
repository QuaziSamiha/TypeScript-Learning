{
  // NORMAL FUNCTION 1st May, 2024
  function add(num1: number, num2: number) {
    return num1 + num2;
  }

  add(2, 5);
  // add(2, false)  // it will show an error

  // explicitly defining return type
  function sum(num1: number, num2: number): number {
    return num1 + num2;
  }
  sum(2, 5);

  // giving default value for parameter
  function sum2(num1: number, num2: number = 10): number {
    return num1 + num2;
  }
  sum2(2);

  // arrow function
  const addition = (num1: number, num2: number): number => num1 + num2;

  // object --> function --> method
  const poorUser = {
    name: "Samiha",
    balance: 0,
    // annonymous function
    addBalance(balance: number): number {
      return this.balance + balance;
      // return `My new balance is ${this.balance+balance}`; // this will show an error
    },
    addBalance2(balance: number): string {
      // return this.balance + balance; // this will show an error
      return `My new balance is ${this.balance + balance}`;
    },
  };

  const arr: number[] = [1, 4, 10];
  const newArray: number[] = arr.map(
    (element: number): number => element * element
  );
}
