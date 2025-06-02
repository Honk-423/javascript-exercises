const repeatString = function(string, num) {
    
let finalString = string;

for (i = 1; i < num; i++) {
    finalString += string;
}

return finalString;

};

repeatString("hey", 3);

repeatString("hello", 10);

repeatString("hi", 1);

// Do not edit below this line
module.exports = repeatString;
