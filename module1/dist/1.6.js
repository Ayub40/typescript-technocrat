"use strict";
{
    // Learning Function
    // Normal Function
    // Arrow Function
    function add(num1, num2) {
        return num1 + num2;
    }
    add(2, "2");
    //another 
    var addArrow = function (num1, num2) { return num1 + num2; };
    // object --> function --> method
    var poorUser = {
        name: 'Mezba',
        balance: 0,
        addBalance: function (balance) {
            return "My new balance is : ".concat(this.balance + balance);
        },
    };
    // 
    var arr = [1, 4, 10];
    var newArray = arr.map(function (elem) { return elem * elem; });
}
