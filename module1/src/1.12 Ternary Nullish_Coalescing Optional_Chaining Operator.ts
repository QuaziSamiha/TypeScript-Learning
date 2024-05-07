{
  // ternary operator
  // optional chainging operator
  // nullish coalescing operator

  const age: number = 15;
  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }

  // using ternary operator
  const isAdult = age >= 18 ? "Adult" : "Not Adult";
  console.log({ isAdult });

  // --------------------------------------nullish coalesing operator----------------------------------
  // used when we make decision before null or undefined
  // const isAuthenticatd = null; // falsy value
  const isAuthenticatd = undefined;
  /*
   * output:
   * { result1: 'Guest' }
   * { result2: 'Guest' }
   */
  // const isAuthenticatd = ""; // falsy value
  /*
   * output:
   * { result1: '' }
   * { result2: 'Guest' }
   */
  // with nullish coalesing operator
  const result1 = isAuthenticatd ?? "Guest";
  console.log({ result1 });
  // without nullish coalesing operator 
  // using ternary operator
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

  // nullishing coalescing
  const permanentAddress1 =
    user.address.permanentAddress ?? "No Permanent Address";
  console.log({ permanentAddress1 });

  //   using optional chaining and nullishing coalescing
  const permanentAddress2 =
    user?.address?.permanentAddress ?? "No Permanent Address";
  console.log({ permanentAddress2 });
}
