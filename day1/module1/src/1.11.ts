{
  // union types
  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullstackDeveloper: FullStackDeveloper = {
    skills: ["HTML", "CSS", "express"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
