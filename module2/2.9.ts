{
    // 2-9: Conditional types

    // Example 1
    type a1 = null;
    type b1 = undefined;

    type x = a1 extends null ? true : false;  // conditional type

    // Example 2
    type a2 = number;
    type b2 = undefined;

    type y = a1 extends null ? true : false;

    // Example 3
    type a3 = null;
    type b3 = undefined;

    type z = a1 extends null ? true : b1 extends undefined ? undefined : any;

    //---------------------------------------------------------------------------
    //---------------------------------------------------------------------------
    //---------------------------------------------------------------------------

    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
        plane: string;
    }

    // car ase kina / bike ase kina / ship ase kina / tractor ase kina
    type CheckVehicle<T> = T extends keyof Sheikh ? true : false

    // type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false

    // type HasTractor = CheckVehicle<"tractor">
    type HasPlane = CheckVehicle<"plane">

}