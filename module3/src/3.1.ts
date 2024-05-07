{
  //   class Animal {
  //     name: string;
  //     species: string;
  //     sound: string;
  //   }
  /*
  Property 'name' has no initializer and is not definitely 
  assigned in the constructor.ts(2564)
*/

  class Animal {
    name: string;
    species: string;
    sound: string;
    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }
  }

  const dog = new Animal("Vondul Vhai", "Dog", "Ghew Ghew");
  const cat = new Animal("Persian Bhai", "cat", "meow meow");
  console.log(cat.name);
}
