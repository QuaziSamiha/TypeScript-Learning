{
  // parameter properties
  class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      //   this.name = name;
      //   this.species = species;
      //   this.sound = sound;
    }
    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("Vondul Vhai", "Dog", "Ghew Ghew");
  const cat = new Animal("Persian Bhai", "cat", "meow meow");
  console.log(cat.name);
  cat.makeSound();

  class Flower {
    constructor(public name: string, public color: string) {}
    colorLook() {
      console.log(`the color is ${this.color}`);
    }
  }

  const rose = new Flower("rose", "red");
  rose.colorLook();
}
