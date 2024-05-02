{
  // destructuring

  const user = {
    id: 155,
    name: {
      firstName: "Quazi",
      middleName: "Samiha",
      lastName: "Tasnime",
    },
    contactNo: "01304396222",
    address: "Uganda",
  };

  //   object destructuring
  const {
    contactNo: phoneInfo, // aliasing
    name: { middleName: midName }, // aliasing
  } = user;
  console.log(phoneInfo, name);

  //   object destructuring
  const {
    contactNo,
    name: { middleName },
  } = user;

  //  array destructuring
  const myFriends = [
    "valu",
    "kalu",
    "hallu",
    "ballu",
    "pullu",
    "kullu",
    "fullu",
  ];
  const [, , bestFriend, ...rest] = myFriends;
  console.log(bestFriend);
}
