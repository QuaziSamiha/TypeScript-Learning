{
  // union types
  type FrontendDeveloper = "fakibajDeveloper" | "juniorDeveloper";
  type FullStackDeveloper = "frontendDeveloper" | "expertDeveloper";
  const newDeveloper: FrontendDeveloper = "juniorDeveloper";
  //   merging two type
  type Developer = FrontendDeveloper | FullStackDeveloper;
  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "O+" | "A+" | "B+";
  };

  const user1: User = {
    name: "Samuuu",
    gender: "male",
    bloodGroup: "O+",
  };
}
