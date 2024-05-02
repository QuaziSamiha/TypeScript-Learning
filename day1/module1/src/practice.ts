/**
 * string
 * number
 * boolean
 * array
 * tuple
 * functions --> normal function, array function, default parameter value, annonymous funtion
 * object --> lateral type, readonly property, method (object function)
 * spread operator for array and object
 * rest operator for array and object
 * destructuring object & array
 * ...rest
 * aliasing
 * type alias
 * union types
 * optional chainging operator
 * nullish coalescing operator
 * ternary operator
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

  let studentInfo: [string, number, string, boolean] = [
    "samiha",
    155,
    "rajshahi",
    false,
  ];
  console.log(studentInfo);

  //   const isAuthenticatd = undefined;
  /*
   * output:
   * { result1: 'Guest' }
   * { result2: 'Guest' }
   */
  const isAuthenticatd = ""; // falsy value
  /**
   * output:
   * { result1: '' }
   * { result2: 'Guest' }
   */
  const result1 = isAuthenticatd ?? "Guest";
  console.log({ result1 });
  const result2 = isAuthenticatd ? isAuthenticatd : "Guest";
  console.log({ result2 });

  type User = {
    name: string;
    address: {
      city: string;
      roadNo: number;
      roadName: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Persian",
    address: {
      city: "Rajshahi",
      roadNo: 3,
      roadName: "Upashahar",
    },
  };

  // without optional chaining
  const permanentAddress = user.address.permanentAddress;
  console.log({ permanentAddress });
  // with optional chaining -- a good practice
  const permanentAddress3 = user?.address?.permanentAddress;
  console.log({ permanentAddress3 });

  //   using optional chaining and nullishing coalescing
  const permanentAddress2 =
    user?.address?.permanentAddress ?? "No Permanent Address";
  console.log({ permanentAddress2 });
}
