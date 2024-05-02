{
  // union types
  type FrontendDeveloper = "fakibajDeveloper" | "juniorDeveloper";
  type FullStackDeveloper = "frontendDeveloper" | "expertDeveloper";
  const newDeveloper: FrontendDeveloper = "juniorDeveloper";
  // const newDeveloper2: FrontendDeveloper = 'fakibajDeveloper'
  // const newDeveloper3: FrontendDeveloper = 'fakibaj' // it will show an error

  //   merging two type
  type Developer = FrontendDeveloper | FullStackDeveloper;
  const newDeveloper4: Developer = "expertDeveloper";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "O+" | "A+" | "B+";
  };

  const user1: User = {
    name: "Samuuu",
    gender: "female",
    bloodGroup: "O+",
  };
}
