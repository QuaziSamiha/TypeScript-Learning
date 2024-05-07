{
  // 3 May, 2024
  // constrains

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return { ...student, course };
  };

  //   after applying constraint it is not possible to pass anything
  //   const student3 = addCourseToStudent({ emni: "emni" });
  const student3 = addCourseToStudent({
    id: 6,
    name: "Mr. Z",
    email: "z@gmail.com",
    emni: "emni",
  });

  const student1 = addCourseToStudent({
    id: 1,
    name: "Mr X",
    email: "x@gmail.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    id: 5,
    name: "Mr Y",
    email: "y@gmail.com",
    hasWatch: "Apple Watch",
  });

  //   const addCourseToStudent = <T>(student: T) => {
  //     const course = "Next Level Web Development";
  //     return { ...student, course };
  //   };

  //   const student3 = addCourseToStudent({ emni: "emni" });

  //   const student1 = addCourseToStudent({
  //     id: 1,
  //     name: "Mr X",
  //     email: "x@gmail.com",
  //     devType: "NLWD",
  //   });

  //   const student2 = addCourseToStudent({
  //     id: 5,
  //     name: "Mr Y",
  //     email: "y@gmail.com",
  //     hasWatch: "Apple Watch",
  //   });
}
