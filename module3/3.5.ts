{
  // 05.05.24
  // oop - inheritance
  class Student {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(numberOfHours: number) {
      console.log(`${this.name} will sleep for ${numberOfHours}`);
    }
  }

  class Teacher {
    name: string;
    age: number;
    address: string;
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      this.name = name;
      this.age = age;
      this.address = address;
      this.designation = designation;
    }
    getSleep(numberOfHours: number) {
      console.log(`${this.name} will sleep for ${numberOfHours}`);
    }
    takeClass(numOfClass: number) {
      console.log(`${this.name} will take ${numOfClass} classes`);
    }
  }

  const student1 = new Student("Mr. Vondul", 20, "Uganda");

  const teacher1 = new Teacher("Mr Vonds", 40, "USA", "Lecturer");
}
