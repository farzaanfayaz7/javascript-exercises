const repeatString = function (string, num) {
    let result = '';
    for (var i = 0; i < num; i++) {
        result+=string;
    }
    if(num<0) {
        return 'ERROR'
    }
    else {
    return result;}
};
console.log(repeatString("", Math.random));
// Do not edit below this line
module.exports = repeatString;
