{
  // nullable types
  const searchName = (value: string) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("there is nothing to search");
    }
  };

  searchName("persian");
  // searchName(null); // it will show an error

  const searchName2 = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("there is nothing to search");
    }
  };

  searchName2(null);

  //   unknown type
  const getSpeedMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 10000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else if (typeof value === "string") {
      const data = value.split(" ");
      console.log(data);
      console.log(typeof data); // object
      const [speed, unit] = value.split(" ");
      console.log(speed);
      console.log(typeof speed); // string
      const convertedSpeed = (parseFloat(speed) * 10000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else {
      console.log("wrong input");
    }
  };

  getSpeedMeterPerSecond(1000);
  getSpeedMeterPerSecond("2000 kmh^-1");

  //   never type
  //   it will never return any kind of type
  const throwError = (msg: string): never => {
    throw new Error(msg); // but returning string
  };
  throwError("muskil se error hogaya");
}
