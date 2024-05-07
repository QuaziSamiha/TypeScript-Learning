{
  // 3 May, 2024

  // normal function
  const createArray = (param: string): string[] => {
    return [param];
  };

  // function with generic
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  // normal function call
  const result1 = createArray("Bangladesh");
  // generic function call
  const resGeneric = createArrayWithGeneric<boolean>(true);
  const resGeneric2 = createArrayWithGeneric<string>("PH");
  // not recommended way to pass object
  const resGeneric3 = createArrayWithGeneric<object>({ name: "sam", id: 155 });
  // recommended
  const resGeneric4 = createArrayWithGeneric<{ name: string; id: number }>({
    name: "tam",
    id: 114,
  });
  // for cleaning code
  type User = { name: string; id: number };
  //   we can also use interface here
  const resGeneric5 = createArrayWithGeneric<User>({
    name: "tam",
    id: 114,
  });
}
