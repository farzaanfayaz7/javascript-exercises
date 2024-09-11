const reverseString = function(str = "") {
    if (str === "") {
      return "";
    }
    return reverseString(str.slice(1)) + str[0];
  };
  
  // Do not edit below this line
  module.exports = reverseString;