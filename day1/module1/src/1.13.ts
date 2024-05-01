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
      const convetedSpeed = (value * 10000) / 3600;
      console.log(`The speed is ${convetedSpeed} ms^-1`);
    } else if (typeof value === "string") {
      const valueInNumber = value.split(" ");
      console.log(valueInNumber);
      const [speed, unit] = value.split(" ");
      console.log(speed);
      const convetedSpeed = (parseFloat(speed) * 10000) / 3600;
      console.log(`The speed is ${convetedSpeed} ms^-1`);
    } else {
      console.log("wrong input");
    }
  };

  getSpeedMeterPerSecond(1000);
  getSpeedMeterPerSecond("1000 kmh^-1");

  //   never type
  //   it will never return any kind of type
  const throwError = (msg: string): never => {
    throw new Error(msg);
  };
  throwError("muskil se error hogaya");
}
