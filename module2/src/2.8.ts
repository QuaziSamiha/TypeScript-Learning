{
  // 3 May, 2024
  // generic type with interface
  type GenericArray<T> = Array<T>;

  type User = {
    name: string;
    age: number;
  };
  interface User2 {
    name: string;
    age: number;
  }

  //   const user: GenericArray<User> = [
  const user: GenericArray<User2> = [
    {
      name: "sam",
      age: 100,
    },
    {
      name: "tam",
      age: 15,
    },
    {
      name: "pumpa",
      age: 14,
    },
  ];
}
