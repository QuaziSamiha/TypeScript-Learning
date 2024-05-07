{
    // static
    class Counter {
      static count: number = 0;
      static increment() {
        // return (this.count = this.count + 1); // show error
        return (Counter.count = Counter.count + 1);
      }
      static decrement() {
        // return (this.count = this.count - 1);
        return (Counter.count = Counter.count - 1);
      }
    }
  
    // const instance1 = new Counter(); // occupy different memory
    console.log(Counter.increment());
    console.log(Counter.increment());
  
    // const instance2 = new Counter(); // occupy different memory
    console.log(Counter.increment());
    //
  }
  