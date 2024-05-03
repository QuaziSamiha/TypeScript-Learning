{
  // 3 May, 2024
  // promise
  const createpromise = (): Promise<string> => {
    //  it will return a custom promise
    // promise constructor
    // callback function
    return new Promise<string>((resolve, reject) => {
      const data: string = "something";
      //   const data: string = null;
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };
  //     return new Promise((resolve, reject) => { // return type not declared
  //       const data: string = "something";
  //     //   const data: string = null;
  //       if (data) {
  //         resolve(data);
  //       } else {
  //         reject("failed to load data");
  //       }
  //     });
  //   };

  //   calling create promise function
  //   const showData = async () => {
  //     const data = await createpromise();
  //     console.log(data);
  //   };

  // const showData = async () => {
  //   // const showData: () => Promise<void>
  //   const data: string = await createpromise();
  //   console.log(data);
  // };

  // const showData = async () => {
  //   // const showData: () => Promise<string>
  //   const data: string = await createpromise();
  //   return data;
  // };

  const showData = async (): Promise<string> => {
    // const showData: () => Promise<string>
    const data: string = await createpromise();
    return data;
  };

  console.log(showData);
}
