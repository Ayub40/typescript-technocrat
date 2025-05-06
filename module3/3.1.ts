{
    //
    // oop - class

    class Animal {
        // public name: string;
        // public species: string;
        // private sound: string;


        // parameter properties
        constructor(
            public name: string,
            public species: string,
            private sound: string
        ) {
            //   this.name = name;
            //   this.species = species;
            //   this.sound = sound;
        }
        // makeSound() {
        //     console.log(`${this.name} the ${this.species} says ${this.sound}`);
        // }
        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }

    const dog = new Animal("German Shepard Bhai", "dog", "Ghew Ghew");
    const cat = new Animal("Persian Bhai", "cat", "meaw meaw");

    dog.makeSound(); // Rex the dog says woof
    cat.makeSound(); // Mittens the cat says meow

    //
}