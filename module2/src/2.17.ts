{
  // 3 May, 2024
  // promise
  const createpromise = (): Promise<boolean> => {
    //  it will return a custom promise
    // promise constructor
    // callback function
    return new Promise<boolean>((resolve, reject) => {
      const data: boolean = true;
      //   const data: string = null;
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  const showData = async (): Promise<boolean> => {
    const data: boolean = await createpromise();
    return data;
  };

  console.log(showData);
}
