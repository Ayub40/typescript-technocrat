{
    // 2-11 Utility types

    // Pick
    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }

    type NameAge = Pick<Person, "name" | "age">

    // Omit ( bad deoa )
    type ContactInfo = Omit<Person, "name" | "age">

    // Required 
    type PersonRequired = Required<Person>

    // Partial
    type PersonPartial = Partial<Person>

    // ReadOnly
    type PersonReadonly = Readonly<Person>

    // const person1: Person = {
    const person1: PersonReadonly = {
        name: "Mr. XY",
        age: 200,
        contactNo: "0178"
    };

    // person1.name = "Mr. YZ";

    // Record
    // type MyObj = {
    //     a: string;
    //     b: string;
    // };

    type MyObj = Record<string, string>

    const EmptyObj: Record<string, unknown> = {}

    const obj1: MyObj = {
        a: "aa",
        b: "bb",
        c: "cc"
    };
}