{
  // type alias
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  //   const student1: {
  //     name: string;
  //     age: number;
  //     gender: string;
  //     contactNo: string;
  //     address: string;
  //   } = {
  //     name: "Mezba",
  //     age: 50,
  //     gender: "male",
  //     contactNo: "0170000000000",
  //     address: "raj",
  //   };

  const student1: Student = {
    name: "Mezba",
    age: 50,
    gender: "male",
    contactNo: "0170000000000",
    address: "raj",
  };

  //   const student2: {
  //     name: string;
  //     age: number;
  //     gender: string;
  //     address: string;
  //   } = {
  //     name: "Mir",
  //     age: 40,
  //     gender: "male",
  //     address: "dhk",
  //   };
  const student2: Student = {
    name: "Mir",
    age: 40,
    gender: "male",
    address: "dhk",
  };

  type UserName = string;
  type IsAdmin = boolean;
  const userName: UserName = "Persian";
  const isAdmin: IsAdmin = false;

  type Add = (num1: number, num2: number) => number;
  //   const add = (num1, num2) => num1 + num2;
  const add: Add = (num1, num2) => num1 + num2;
}
