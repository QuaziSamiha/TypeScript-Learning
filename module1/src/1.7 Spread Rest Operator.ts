{
  const poorUser = {
    name: "Mr. X",
  };

  //   spread operator

  //   ------------- for Array -----------
  const bros1 = ["halu", "kalu", "valu"];
  const bros2 = ["falu", "calu", "palu"];

  //   bros1.push(bros2); // it will show an error
  //   it's meaning
  //   const bros1 = ["halu", "kalu", "valu", ["falu", "calu", "palu"]];
  // but bros1 only takes string, not an array
  bros1.push(...bros2);
  // ----------------- for object ------------
  const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentors2 = {
    prisma: "firoz",
    next: "Tanmoy",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  //   LEARN REST OPERATOR
  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };

  greetFriends("haku", "faku", "maku");
}
