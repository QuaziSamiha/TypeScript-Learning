{
  // ------------------ OBJECT ------------------------
  // --------- different data types -----------------
  type StudentName = string; // type aliasing
  const myBio: {
    name: StudentName; // type aliasing
    age: number;
    isStudent: boolean;
    jobStatus: "Employed" | "Unemployed"; // union
    bsc: "RUET"; // literal type
    readonly hsc: string; // readonly property
    address: {
      presentAddress?: string; // optional
      permanentAddress: string;
    };
    birthDayMonth: [number, string]; // tuple
    friends: string[];
  } = {
    name: "Samiha",
    age: 26,
    isStudent: false,
    jobStatus: "Employed", // union
    bsc: "RUET", // literal type
    hsc: "RC", // read only property
    address: {
      permanentAddress: "Rajshahi",
    },
    birthDayMonth: [4, "sept"], // tuple
    friends: ["vondul", "vondulina", "kan jhul jhul"], // array
  };

  console.log(myBio);
  // accessing object property and assigning value
  myBio.address.presentAddress = "Dhaka";
  console.log(myBio);
  // modifying object property
  myBio.jobStatus = "Unemployed";
  console.log(myBio);

  const newFriends: string[] = ["gulu", "pulu", "vulu"];
  console.log(newFriends);
  // spread operator ---> used in array
  const allFriends: string[] = [...newFriends, ...myBio.friends];
  console.log(allFriends);
  const [, , , bestFriend] = allFriends;
  console.log(bestFriend);
  // rest operator ---> used in array
  const [, , , , ...rest] = allFriends;
  console.log(...rest);

  // destructuring and aliasing
  const { hsc: HSC_Institure } = myBio;
  console.log(HSC_Institure);

  // destructuring and aliasing
  const {
    bsc: Bachelar_Degree,
    address: { presentAddress: newAddress },
  } = myBio;
  console.log(Bachelar_Degree, newAddress);

  // normal function
  function myName(firstName: string): string {
    return `My Name is ${firstName}`;
  }
  console.log(myName("Akku"));

  // arrow function
  const myCG = (cgpa: number): string => `My CGPA is ${cgpa}`;
  console.log(myCG(2.9));

  // unknown data type
  const age = (year: unknown) => {
    if (typeof year === "number") {
      console.log(2024 - year);
    } else if (typeof year === "string") {
      console.log(2024 - parseFloat(year));
    } else {
      console.log("age calculation is not possible");
    }
  };

  age(2000);
  age("2000");
  age(undefined);

  // type aliasing
  type Add = (n1: number, n2: number) => number;
  const sum: Add = (num1, num2) => num1 * num2;
  console.log(sum(12, 10));
}
