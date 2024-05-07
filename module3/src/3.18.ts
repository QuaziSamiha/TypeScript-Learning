{
  // abstraction
  // 2 ways : 1. interface 2. abstract

  interface Vehicle1 {
    name: string;
    model: number;
  }

  //   for object
  const vehicle1: Vehicle1 = {
    name: "Toyota",
    model: 2000,
  };

  //   class Vehicle1: Vehicle1 {} // will show error
    class Vehicle1 implements Vehicle1 {}
  //
}
