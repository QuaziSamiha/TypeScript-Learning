{
  // intersection types
  type FrontendDeveloper = {
    skills: string[]; // array
    designation1: "Frontend Developer"; // literal type
  };

  type BackendDeveloper = {
    skills: string[]; // array
    designation2: "Backend Developer"; // literal type
  };

  // intersection two type alias
  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullstackDeveloper: FullStackDeveloper = {
    skills: ["HTML", "CSS", "express"],
    designation1: "Frontend Developer", // must
    designation2: "Backend Developer", // must
  };

  console.log(fullstackDeveloper)
}
