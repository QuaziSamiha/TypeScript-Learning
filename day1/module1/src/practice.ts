
/**
 * string
 * number
 * boolean
 * array
 * tuple
 * functions --> normal function, array function, default parameter value, annonymous funtion
 * object --> lateral type, readonly property, method (object function)
 * union
 * null
 * undefined
 * unknown
 * never
 */
{
  const myName: string = "samiha";
  console.log(myName);

  let roll: number = 5;
  console.log({ roll });

  let isJobless: boolean;
  isJobless = false;
  console.log({ isJobless });

  const myObj: {
    name: string;
    roll: number;
    isStudent: boolean;
  } = {
    name: "samiha",
    roll: 155,
    isStudent: false,
  };
  console.log(myObj);

  type Student = {
    institute: "RUET";
    name: string;
    roll: number;
    isStudent?: boolean;
  };

  const myObj2: Student = {
    institute: "RUET",
    name: "samiha",
    roll: 566,
  };
  console.log(myObj2);

  const { institute: education, name: newName } = myObj2;
  console.log(education, newName);

  function sum(n1: number, n2: number): number {
    return n1 + n2;
  }

  console.log(sum(12, 36));

  const add = (n: number): number => n * n;
  console.log(add(5));

  let jama: string[] = ["haki", "paki", "faki"];
  console.log(jama);
  jama.push("hunter");
  console.log(jama);

  let studentInfo : [string, number, string, boolean] = ['samiha', 155, 'rajshahi', false]
  console.log(studentInfo)
}
