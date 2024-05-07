{
  // abstract by using interface
  //   looking at interface one cannot understand what is the real implementation

  // idea
  abstract class Car {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log(`I am just testing`);
    }
  }

  // const toyotaCar = new Car(); // will show an error , cannot create instance of abstract class
  // toyotaCar.startEngine();
  //   implementation
  class ToyotaCar extends Car {
    startEngine(): void {
      console.log(`I am starting the car enginee`);
    }
    stopEngine(): void {
      console.log("I am stoping the car enginee");
    }
    move(): void {
      console.log(`I am moving the car`);
    }
  }
}
