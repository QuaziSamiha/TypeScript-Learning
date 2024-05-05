{
  class Animal {
    public name: string;
    public species: string;
    public sound: string;
    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }
    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("Vondul Vhai", "Dog", "Ghew Ghew");
  const cat = new Animal("Persian Bhai", "cat", "meow meow");
  console.log(cat.name);
  cat.makeSound();
}
