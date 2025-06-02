const repeatString = function(string, num) {
    
let finalString = string;

for (i = 1; i < num; i++) {
    finalString += string;
}

return finalString;

};

repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
