{
  // 3 May, 2024
  // promise
  type Something = { something: string };

  const createpromise = (): Promise<Something> => {
    //  it will return a custom promise
    // promise constructor
    // callback function
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "something" };
      //   const data: string = null;
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  const showData = async (): Promise<Something> => {
    const data: Something = await createpromise();
    return data;
  };

  console.log(showData);
}
