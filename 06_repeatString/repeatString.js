const repeatString = function(string, num) {
    
let finalString = string;

for (i = 1; i < num; i++) {
    finalString += string;
}

if (num > 0) {
    return finalString;
} else {
    return "";
}

};

repeatString("hey", 3);

repeatString("hello", 10);

repeatString("hi", 1);

repeatString("bye", 0);

// Do not edit below this line
module.exports = repeatString;
