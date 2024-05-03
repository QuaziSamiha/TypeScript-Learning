{
  // 3 May, 2024

  //   const getToDo = async () => {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos/1"
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //   };

  //   getToDo();

  type ToDo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };

  const getToDo = async (): Promise<ToDo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    return data;
  };

  getToDo();
}
