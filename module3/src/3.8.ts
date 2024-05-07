{
  // 06.05.24
  // instanceof gaurd
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log("I am making sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBar() {
      console.log("I am barking");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeow() {
      console.log("I am meow");
    }
  }

  const getAnimal = (animal: Animal) => {
    // it won't give error
    // animal.makeSound()
    // animal.name
    // animal.species

    // these will give error
    // animal.makeBar()
    // animal.makeMeow()
    if (animal instanceof Dog) {
      animal.makeBar();
    } else if (animal instanceof Cat) {
      animal.makeMeow();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("Dog Vai", "dog");
  const cat = new Cat("Cat Vai", "Meow");

  getAnimal(dog);
  getAnimal(cat);
  //
  // ts-node-dev --respawn --transpile-only .\module3\3.8.ts
}
