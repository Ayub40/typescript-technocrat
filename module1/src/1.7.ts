{
    // Today Learning
    // 1. Spread Operator
    // 2. Rest Operator
    // 3. Destructuring


    // Learn Spread Operator
    const bros1: string[] = [
        "Mir",
        "Firoz",
        "Mizan",
    ];
    const bros2: string[] = ['Tanmoy', 'Nahid', 'Rahat']
    bros1.push(...bros2)

    const mentors1 = {
        typescript: "Mezba",
        redux: 'Mir',
        dbms: 'Mizan'
    }

    const mentors2 = {
        prisma: 'Firoz',
        next: 'Tanmoy',
        cloud: 'Nahid'
    }

    const mentorList = {
        ...mentors1,
        ...mentors2
    }

    //learn rest operator

    const greetFriends = (...friends: string[]) => {
        // console.log(`Hi ${friends1} ${friends2} ${friends3}`);

        friends.forEach((friend: string) => console.log(`Hi ${friend}`);)
    };
    greetFriends("Abul", "Kabul", "Babul", "Ubul", "Labul");

}