{
  // 3 May, 2024

  // function with generic and using tuple
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const resGeneric = createArrayWithTuple<number, string>(155, "samiha");
  const resGeneric2 = createArrayWithTuple<string, string>("PH", "L2");
  const resGeneric3 = createArrayWithTuple<string, { name: string }>("PH", {
    name: "L2",
  });

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";
    return { ...student, course };
  };

  const student1 = addCourseToStudent({
    name: "Mr X",
    email: "x@gmail.com",
    devType: "NLWD",
  });
  
  const student2 = addCourseToStudent({
    name: "Mr Y",
    email: "y@gmail.com",
    devType: "NLWD",
  });
}
