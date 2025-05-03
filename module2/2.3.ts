{
    // generic type (dynamic)

    // type GenericArray = Array<boolean>
    // type GenericArray<param> = Array<param>
    type GenericArray<T> = Array<T>  // Industry type code e <param> na likhe <T> likhe

    // const rollNumber: number[] = [3, 6, 8];
    // const rollNumber: Array<number> = [3, 6, 8];
    const rollNumber: GenericArray<number> = [3, 6, 8];

    // const mentors: string[] = ["Mr.X", "Mr.Y", "Mr.Z"];
    // const mentors: Array<string> = ["Mr.X", "Mr.Y", "Mr.Z"];
    const mentors: GenericArray<string> = ["Mr.X", "Mr.Y", "Mr.Z"];

    // const boolArray: boolean[] = [true, false, true];
    // const boolArray: Array<boolean> = [true, false, true];
    const boolArray: GenericArray<boolean> = [true, false, true];

    const add = (x: number, y: number) => x + y

    add(30, 20)

    // another

    const user: GenericArray<{ name: string; age: number }> = [
        {
            name: "Mezba",
            age: 100,
        },
        {
            name: "Jhankar Mahbub",
            age: 110,
        }
    ]

    // generic tuple

    type GenericTuple<X, Y> = [X, Y]

    const manush: GenericTuple<string, string> = ["Mr.X", "Mr.Y"]

    const UserWithID: GenericTuple<number, { name: string, email: string }> = [1234, { name: "persian", email: "a@gmail.com" }]

}