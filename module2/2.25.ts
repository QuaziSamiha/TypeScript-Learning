{
  // 3 May, 2024
  // utility types

  // Pick
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type Name = Pick<Person, "name">;
  type NameAge = Pick<Person, "name" | "age">;

  // Omit
  type ContactInfo = Omit<Person, "name" | "age">;

  //   Required
  type PersonRequired = Required<Person>;

  //   Partial
  type PersonPertial = Partial<Person>;

  //   Readonly
  //   type PersonReadonly = Readonly<Person>
  //   const person1: Person = {
  //     name: "Mr X",
  //     age: 200,
  //     contactNo: "017",
  //   };

  //   person1.name = "Mr Z";

  //   Readonly
  type PersonReadonly = Readonly<Person>;
  const person1: PersonReadonly = {
    name: "Mr X",
    age: 200,
    contactNo: "017",
  };

  //   person1.name = "Mr Z"; // it will show an error

  // Record
  //   type MyObj = {
  //     a: string;
  //     b: string;
  //   };

  //   const obj1: MyObj = {
  //     a: "aa",
  //     b: "bb",
  //     c: 'cc', // it will show an error
  //   };

  // Record
  type MyObj = Record<string, string>;

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
    d: "dd",
    // e: 6 , // will show an error
  };

  // Record
  type MyObj2 = Record<string, number>;
  const EmptyObj: Record<string, unknown> = {};
//   const obj2: MyObj2 = {
//     a: "aa",
//     b: "bb",
//     c: "cc",
//     d: "dd",
//     e: 6, // will show an error
//   };
  const obj2: EmptyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
    d: "dd",
    e: 6, // will show an error
  };
}
