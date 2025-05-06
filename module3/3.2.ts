{
    // 3-2: Inheritance in OOP

    // oop - Inheritance

    // Example: 2
    class Person {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }
    }

    class Student extends Person {

        constructor(name: string, age: number, address: string) {
            super(name, age, address)
        }
        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }
    }

    const student1 = new Student('Mr.student', 20, 'Uganda');
    // student1.

    // Example: 2
    class Teacher extends Person {
        designation: string;

        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address)
            this.designation = designation;
        }

        // Person theke passi , eijonno dorker nai
        // getSleep(numOfHours: number) {
        //     console.log(`${this.name} will sleep for ${numOfHours}`);
        // }

        takeClass(numberOfClass: number) {
            console.log(`${this.name} will take ${numberOfClass}`);
        }
    }

    const teacher = new Teacher('Mr.teacher', 40, 'Uganda', 'professor');
    // teacher.








    // class Parent {
    //     name: string;
    //     age: number;
    //     address: string;

    //     constructor(name: string, age: number, address: string) {
    //         this.name = name;
    //         this.age = age;
    //         this.address = address;
    //     }

    //     getSleep(numberOfHours: number) {
    //         console.log(`${this.name} sleeps for ${numberOfHours} hours`);
    //     }
    // }

    // class Student extends Parent {
    //     constructor(name: string, age: number, address: string) {
    //         super(name, age, address); // Call the constructor of the Parent class
    //     }
    // }

    // const student1 = new Student("John", 20, "123 Main St");

    // student1.getSleep(8); // John sleeps for 8 hours

    // class Teacher extends Parent {
    //     designation: string;

    //     constructor(
    //         name: string,
    //         age: number,
    //         address: string,
    //         designation: string
    //     ) {
    //         super(name, age, address);
    //         this.designation = "teacher";
    //     }

    //     takeClass(numberOfClasses: number) {
    //         console.log(`${this.name} takes ${numberOfClasses} classes`);
    //     }
    // }

    // const teacher1 = new Teacher(
    //     "Teacher Jane",
    //     30,
    //     "456 Elm St",
    //     "i am teacher"
    // );
    // teacher1.getSleep(7); // Teacher Jane sleeps for 7 hours
    // teacher1.takeClass(5); // Teacher Jane takes 5 classes
}