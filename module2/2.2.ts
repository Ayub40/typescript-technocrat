{
    // 2-2: Interface, type vs interface
    // interface ( typescript type and interface ei 2 vave declare kora jai )

    // 1. js --> object
    type User1 = {
        name: string;
        age: number;
    };

    // interface User2 {
    //     name: string;
    //     age: number;
    // }

    // const User1: User2 = {
    //     name: "Persian",
    //     age: 100,
    // }

    ////

    interface User2 {
        name: string;
        age: number;
    }

    interface UserWithRole2 extends User2 {
        role: string
    }

    const user1: UserWithRole2 = {
        name: "Persian",
        age: 100,
        role: "manager"
    }

    type UserWithRole1 = User1 & { role: string };

    const User1: UserWithRole1 = {
        name: "Persian",
        age: 100,
        role: "manager"
    }

    // type rollNumber = number;

    // js --> object , array --> object, function --> object


    // 2. array --> object,
    // Example 1
    type Roll1 = number[];

    const rollNumber1: Roll1 = [1, 2, 3]

    // Example 2
    interface Roll2 {
        [index: number]: number
    }

    const rollNumber2: Roll2 = [1, 2, 3]

    // 3. function --> object
    // Example 1
    type Add1 = (num1: number, num2: number) => number

    const add1: Add1 = (num1, num2) => num1 + num2

    // Example 2
    interface Add2 {
        (num1: number, num2: number): number
    }

    const add2: Add2 = (num1, num2) => num1 + num2

}