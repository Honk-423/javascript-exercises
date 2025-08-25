const sumAll = function(numA, numB) {
// INIT parameter numA and numB
// INIT arr and make it an empty array
let arr = [];

if (numA > numB) {
    // IF numA is greater than numB
    for (let i = numB; i <= numA; i++) {
        arr.push(i);
        // INIT for loop with numB as the value and make it continue to 
        // loop until i equals numA
        // PUSH i into arr
    }
} else if (numA < 0 || numB < 0) {
    return "ERROR";
} else {
    // ELSE 
    for (let i = numA; i <= numB; i++) {
        arr.push(i);
        // INIT for loop with numA as the value and make it continue to 
        // loop until i equals numB
        // PUSH i into arr
    }
}

let sum = arr.reduce( (total, curr) => total + curr, 0);
// INIT sum with the value arr.reduce and the inital value set to 0

return sum;
// RETURN sum
};

sumAll(2, 4);

// There will be two numbers as parameters. I'll have to loop from the
// smaller number to the larger one to generate all of the numbers in 
// between, and somehow I'll have to add them all to the same array.
// Then I'll probably have to reduce the array containing all of them.
// It's also important that I set reduce's intial value to 0, if I do
// use reduce.

// Do not edit below this line
module.exports = sumAll;
