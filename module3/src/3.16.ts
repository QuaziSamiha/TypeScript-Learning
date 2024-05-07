{
  // polymorphism

  class Person {
    getSleep() {
      console.log(`I am sleeping for 8 hours per day`);
    }
  }

  class Student extends Person {
    getSleep() {
      console.log(`I am sleepoing for 7 hours per day`);
    }
  }
  class Developr extends Person {
    getSleep() {
      console.log(`I am sleepoing for 6 hours per day`);
    }
  }

  const getSleepingHours = (param: Person) => {
    param.getSleep()
  }

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developr();

  getSleepingHours(person1)
  getSleepingHours(person2)
  getSleepingHours(person3)
  //
}
