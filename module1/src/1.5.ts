// Reference Type --> Object

const user: {
    readonly company: string; //type --> literal types
    firstName: string;  // optional type
    middleName?: string;
    lastName: string;
    isMarried: boolean;
} = {
    company: 'Programming Hero',
    firstName: 'Mezbaul',
    lastName: 'Abedin',
    isMarried: true,
};

user.company = 'PH'

// 1-6 Function in typescript