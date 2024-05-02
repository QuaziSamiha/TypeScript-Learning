{
  // type alias
  type User1 = {
    name: string;
    age: number;
  };

  type RollNumber = number; // defining primitive type
  // alias can define primitive data type but interface cannot

  /*
   * so in all case (premitive data type and object) we can use alias
   * and in case of object we can use interface
   */
  
  // interface
  interface User2 {
    name: string;
    age: number;
  }

  const user: User1 = {
    name: "samiha",
    age: 25,
  };

  const user2: User2 = {
    name: "samiha",
    age: 25,
  };
}
