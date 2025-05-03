"use strict";
{
    // nullable types / unknown types
    var searchName = function (value) {
        if (value) {
            console.log("Searching");
        }
        else {
            console.log("There is nothing to search");
        }
    };
    // searchName("persian");
    // searchName(null)
    // unknown typeof
    var getSpeedInMeterPerSecond = function (value) {
        if (typeof value === "number") {
            var convertedSpeed = (value * 1000) / 3600;
            console.log("The speed is ".concat(convertedSpeed, " ms^-1"));
        }
        else if (typeof value === "string") {
            var _a = value.split(""), result = _a[0], unit = _a[1];
            var convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log("The speed is ".concat(convertedSpeed, " ms^-1"));
        }
        else {
            console.log("wrong input");
        }
    };
    // getSpeedInMeterPerSecond(null);
    getSpeedInMeterPerSecond(1000);
    //never
    var throwError = function (msg) {
        throw new Error(msg);
    };
    throwError("Mushkil se error hogaya");
}
