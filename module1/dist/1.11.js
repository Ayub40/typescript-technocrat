"use strict";
var _a, _b;
{
    // ternary operator || optional chaining || nullish coalescing operator
    var age = 18;
    if (age >= 18) {
        console.log("adult");
    }
    else {
        console.log("not adult");
    }
    var isAdult = age >= 18 ? "adult" : "not adult";
    // console.log({ isAdult });
    // nullish coalescing operator {( ?? ) eta sodo null and undefined er khtre kaj korbe} 
    // null / undefined ---> decision making
    // const isAuthenticated = null;
    // const isAuthenticated = "";
    var isAuthenticated = undefined;
    var result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    var result2 = isAuthenticated ? isAuthenticated : "Guest";
    var user_1 = {
        name: "Persian",
        address: {
            city: 'ctg',
            road: 'Awesome Road',
            presentAddress: 'ctg town'
        }
    };
    var permanentAddress = (_b = (_a = user_1 === null || user_1 === void 0 ? void 0 : user_1.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No Permanent Address";
    console.log({ permanentAddress: permanentAddress });
    //
}
