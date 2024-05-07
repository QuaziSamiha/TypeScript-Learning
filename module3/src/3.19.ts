{
  // abstract by using interface
  //   looking at interface one cannot understand what is the real implementation
  //   idea
  interface Vehicle2 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  //   real implmentation
  class Car implements Vehicle2 {
    startEngine(): void {
      console.log(`I am starting the car enginee`);
    }
    stopEngine(): void {
      console.log("I am stoping the car enginee");
    }
    move(): void {
      console.log(`I am moving the car`);
    }
    test() {
      console.log(`I am just testing`);
    }
  }

  const toyotaCar = new Car();
  toyotaCar.startEngine();
  //
}
