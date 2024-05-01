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

  //   using ternary operator
  const isAdult = age >= 18 ? "Adult" : "Not Adult";
  console.log({ isAdult });

  //   nullish coalesing operator
  //   used when we make decision before null or undefined
  //   const isAuthenticatd = null; // falsy value
  const isAuthenticatd = undefined;
  // const isAuthenticatd = ""; // falsy value
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

  const permanentAddress = user.address.permanentAddress;
  console.log({ permanentAddress });

  // nullishing coalescing
  const permanentAddress1 =
    user.address.permanentAddress ?? "No Permanent Address";
  console.log({ permanentAddress1 });

  //   using optional chaining and nullishing coalescing
  const permanentAddress2 =
    user?.address?.permanentAddress ?? "No Permanent Address";
  console.log({ permanentAddress2 });
}
