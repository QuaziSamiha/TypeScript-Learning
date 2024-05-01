// reference type --> object

// const user: {
// defining type exclusively
//   firstName: string;
//   middleName: string;
//   lastName: string;
// } = {
//   firstName: "Quazi",
//   middleName: "Samiha", // if you not give middle name , then it will show an error
//   lastName: "Tasnim",
// };

const user: {
  firstName: string;
  middleName?: string; // this ? indicates middle name is optional
  lastName: string;
} = {
  firstName: "Quazi",
  middleName: "Samiha", // if you not give middle name , then it will show no error
  lastName: "Tasnim",
};

const user2: {
  company: string;
  firstName: string;
  middleName?: string; // this ? indicates middle name is optional
  lastName: string;
} = {
  company: "Programming Hero",
  firstName: "Quazi",
  middleName: "Samiha", // if you not give middle name , then it will show no error
  lastName: "Tasnim",
};
const user3: {
  company: "Programming Hero"; // literal type -- a value is behaving like type
  firstName: string;
  middleName?: string; // this ? indicates middle name is optional
  lastName: string;
} = {
  company: "Programming Hero",
  //   company: "Programming Hero Banglades", // it will show an error
  firstName: "Quazi",
  middleName: "Samiha", // if you not give middle name , then it will show no error
  lastName: "Tasnim",
};

const user4: {
  // adding readonly property
  readonly company: string; // literal type -- a value is behaving like type
  firstName: string;
  middleName?: string; // this ? indicates middle name is optional
  lastName: string;
} = {
  company: "Programming Hero",
  firstName: "Quazi",
  middleName: "Samiha", // if you not give middle name , then it will show no error
  lastName: "Tasnim",
};

// user.company = 'PH' // it will show an error
