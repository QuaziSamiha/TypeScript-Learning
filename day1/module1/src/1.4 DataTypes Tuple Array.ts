{
  // basic data types 01.05.24
  // string
  let firstName: string = "samiha";
  // number
  let roll: number = 1703155;
  // boolean
  let isAdmin: boolean = false;
  // undefined
  let x: undefined = undefined;
  // null
  let y: null = null;

  // if you not defined, then compiler will define it as "any" type
  let d; // not recommended
  d = 155;
  d = "pochu";
  d = true;

  // array
  let friends: string[] = ["rehel", "vondul"];
  // frinends.push(7) // it will show an error
  let rollList: number[] = [1, 3];
  rollList.push(7);
  console.log(rollList);

  // tuple --> special kind of array --> order --> type of values
  let coordinates: [number, number] = [1, 5];
  let ageName: [number, string] = [50, "Sam"];
  // ageName[0] = 'Tasnim' // will show an error
  ageName[0] = 55;
}
