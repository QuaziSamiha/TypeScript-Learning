{
  // 3 May, 2024
  // generic constraint with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; // manually

  type Owner2 = keyof Vehicle;
  //   const person1 : Owner2 = ''

  const user = {
    name: "saam",
    age: 26,
    address: "raj",
  };
  //   console.log(user.name);
  //   console.log(user["name"]);

  //   function getPropertyValue(obj: object, key: string) {
  //     return obj[key];
  //   }

  //   const getPropertyValue = <X, Y extends "name" | "age" | "address">(obj: X, key: Y) => {
  //     return obj[key];
  //   };

  const getPropertyValue2 = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const car = {
    model: "bmw",
    year: 2,
  };
  //   const result1 = getPropertyValue(user, "name");
  const result1 = getPropertyValue2(user, "name");
  const result2 = getPropertyValue2(car, "model");
  //   obj[key]
}
