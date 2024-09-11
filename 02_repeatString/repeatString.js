const repeatString = function (string, num) {
    let result = '';
    for (var i = 0; i < num; i++) {
        result+=string;
    }
    return result;
};
console.log(repeatString("hey", 3));
// Do not edit below this line
module.exports = repeatString;
