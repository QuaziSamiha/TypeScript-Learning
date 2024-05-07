{
  // 3 May, 2024
  // conditional type
  type a1 = number;
  type b1 = undefined;

  type x = a1 extends null ? true : false; // conditional type

  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;
  //   type y = a1 extends null ? true : b1 extends string ? undefined : any;

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    plane: string;
  };

  // keyof Sheikh 'bike' | 'car' | 'ship'

  // car ase kina / bike ase kina / ship ase kina / tractor ase kina
  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  type HasBike = CheckVehicle<"car">; // true
  type HasShip = CheckVehicle<"ship">; // true
  type HasTractor = CheckVehicle<"tractor">; // false
}
