{
  // generic type

  //   array

  //   type GenericArray = Array<number>
  //   type GenericArray = Array<number>
  //   type GenericArray<param> = Array<param>;
  type GenericArray<T> = Array<T>;

  //   const rollNumbers: number[] = [1, 6, 8];
  //   const rollNumbers: Array<number>= [1, 6, 8];
  const rollNumbers: GenericArray<number> = [1, 6, 8];

  //   const mentors: string[] = ["sam", "pam", "tam"];
  //   const mentors: Array<string> = ["sam", "pam", "tam"];
  const mentors: GenericArray<string> = ["sam", "pam", "tam"];

  //   const isAdmin: boolean[] = [true, false, false];
  const isAdmin: Array<boolean> = [true, false, false];
}
