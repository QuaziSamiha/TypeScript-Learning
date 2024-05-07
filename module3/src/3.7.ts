{
  // 05.05.24
  // type gaurds
  // typeof --> type gaurd

  //   const add = (
  //     param1: string | number,
  //     param2: string | number
  //   ): string | number => {
  //     if (typeof param1 === "number" && typeof param2 === "number") {
  //       return param1 + param2;
  //     } else{
  //         return param1.toString() + param2.toString
  //     }
  //   };

  type AlphaNumeric = string | number;

  const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  console.log(add(2, 3));
  console.log(add("2", "3"));
  console.log(add("2", 3));

  //   in gaurd
  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };

  const normalUser: NormalUser = {
    name: "samiha",
  };
  const adminUser: AdminUser = {
    name: "samiha",
    role: "admin",
  };
}
// ts-node-dev --respawn --transpile-only .\module3\3.7.ts
