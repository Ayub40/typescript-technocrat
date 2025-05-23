{
    // 3-3: Type guard using typeof & in

    type Alphanumeric = string | number;

    //(typeof param1 === "string" && typeof param2 === "string")
    const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        } else {
            return param1.toString() + param2.toString();
        }
        // else {
        //     throw new Error("Invalid input types");
        // }
    };

    const result1 = add('2', '3');
    console.log(result1);

    // console.log(add(1, 2)); // 3
    // console.log(add("Hello", "World")); // HelloWorld

    // in guard
    type NormalUser = {
        name: string;
    };

    type AdminUser = {
        name: string;
        role: 'admin';
    };

    const getUser = (user: NormalUser | AdminUser) => {
        if ('role' in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        } else {
            console.log(`My name is ${user.name}`);
        }
    };

    const normalUser: NormalUser = {
        name: "Mr. Normal Bhai",
        // role: "admin",
    };

    const adminUser: AdminUser = {
        name: "Mr. Admin Bhai",
        role: "admin",
    }

    getUser(adminUser);

}