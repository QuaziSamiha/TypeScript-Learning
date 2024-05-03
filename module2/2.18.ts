{
  // 3 May, 2024
  // promise
  const createpromise = (): Promise<{ something: string }> => {
    //  it will return a custom promise
    // promise constructor
    // callback function
    return new Promise<{ something: string }>((resolve, reject) => {
      const data: { something: string } = { something: "something" };
      //   const data: string = null;
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  const showData = async (): Promise<{ something: string }> => {
    const data: { something: string } = await createpromise();
    return data;
  };

  console.log(showData);
}
