const reverseString = function(string) {

return string
// RETURN string
.split("")
// SPLIT string
.reverse()
// REVERSE string
.join("");
// JOIN string
};

reverseString("hello there");

// "Strings in JavaScript cannot be reversed directly so you're going 
// to have to split it into something else first.." An array?
// Try splitting the string into an array then 
// rearranging it backwards.
// Make the array output every letter starting from the last one.

// Do not edit below this line
module.exports = reverseString;
