const sumAll = function() {
// INIT parameter numA and numB
// INIT arr and make it an empty array
// IF numA is greater than numB
    // INIT for loop with numA as the value and make it continue to 
    // loop until i equals numB
    // PUSH i into arr
// ELSE 
    // INIT for loop with numB as the value and make it continue to 
    // loop until i equals numA
    // PUSH i into arr
// INIT sum with the value arr.reduce and the inital value set to 0
// RETURN sum
};

// There will be two numbers as parameters. I'll have to loop from the
// smaller number to the larger one to generate all of the numbers in 
// between, and somehow I'll have to add them all to the same array.
// Then I'll probably have to reduce the array containing all of them.
// It's also important that I set reduce's intial value to 0, if I do
// use reduce.

// Do not edit below this line
module.exports = sumAll;
