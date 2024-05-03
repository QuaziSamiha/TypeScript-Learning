{
  // generic tuple

  //   normal tuple
  //   const friends: [string, string] = ["panku", "manku"];

  type GenericTuple<X, Y> = [X, Y];
  const friends: GenericTuple<string, string> = ["panku", "manku"];

  const userWithID: GenericTuple<number, { name: string; email: string }> = [
    155,
    { name: "sam", email: "s@gmail.com" },
  ];
}
