{
  //  2 May, 2024
  // array using interface
  // js --> object , array --> object, function --> object

  type Roll1 = number[];

  interface Roll2 {
    [index: number]: number;
  }

  //   const rollNumber: Roll1 = [1, 4, 2];
  // ---------------------------- 0  1  2 --> index is number type

  const rollNumber: Roll2 = [1, 4, 2];
  interface FriendsName {
    [index: number]: string;
  }
  const friends: FriendsName = ["sam", "pam", "tam"];

  // function using interface
  // type aliasing
  type Add = (num1: number, num2: number) => number;
  const addition: Add = (n1, n2) => n1 + n2;
  // interface
  interface Sum {
    (num1: number, num2: number): number;
  }
  const summation: Sum = (n1, n2) => n1 + n2;
}
