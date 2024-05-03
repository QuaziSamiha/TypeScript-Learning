{
  // generic type
  //   object
  type GenericArray<T> = Array<T>;

  // not recommended way
  // const user: GenericArray<object> = [
  //     {
  //         name: 'sam',
  //         age: 100,
  //     },
  //     {
  //         name: 'tam',
  //         age: '110',
  //     },
  //     {
  //         role: 'admin'
  //     }
  // ]

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "sam",
      age: 100,
    },
    {
      name: "tam",
      //   age: "110", // it will now show an error
      age: 15,
    },
    {
      //   role: "admin", // now it will show an error
      name: "pumpa",
      age: 14,
    },
  ];
}
