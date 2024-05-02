{
  // type assertion
  /*
   * Sometimes TypeScript Might Be Unsure Of A Variable's
   * Type. We'll Learn How To Give Hints (Type Assertions)
   * And Refine Types (Narrowing) For Better Code Safety.
   */

  let anything: any;
  anything = "next level";
  (anything as string).length;
  // when we defined as string then methods for string will be suggested

  anything = 222;
  // (anything as number).toPrecision
  // methods for number will be suggested after point

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value);
      return `The value in kg : ${convertedValue * 1000}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm(1000) as number;
  const result2 = kgToGm('1000') as string;

  type CustomError = {
    message: string;
  }

  try{

  } catch(error){
    console.log((error as CustomError).message)
  }
}
