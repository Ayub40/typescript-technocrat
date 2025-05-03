"use strict";
{
    // destructuring
    var user_1 = {
        id: 345,
        name: {
            firstName: 'Mezbaul',
            middleName: "Abedin",
            lastName: 'Persian',
        },
        contactNo: '01700000000',
        address: "Uganda",
    };
    var contactNo = user_1.contactNo, midName = user_1.name.middleName;
    // array destructuring
    var myFriends = ["chandler", "joey", "ross", "rachel", "monica", "phoebe"];
    var bestFriend = myFriends[2], rest = myFriends.slice(3);
}
