{
  //  2 May, 2024
  // type alias
  type User1 = {
    name: string;
    age: number;
  };

  //   type aliasing with intersection
  type UserWithRole = User1 & { role: string };

  const user1: UserWithRole = {
    name: "samiha",
    age: 25,
    role: "web developer",
  };

  // interface
  interface User2 {
    name: string;
    age: number;
  }

  interface UserWithRole2 extends User2 {
    role: string;
  }

  interface UserWithAddress extends User1 {
    address: string;
  }

  const user2: UserWithRole2 = {
    name: "samiha",
    age: 25,
    role: "manager",
  };

  const user3: UserWithAddress = {
    name: "samuuu",
    age: 26,
    address: "rajshahi",
  };
}
