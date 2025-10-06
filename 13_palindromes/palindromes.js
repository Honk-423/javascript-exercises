const palindromes = function (str) {
    function simplifyStr() {
        return str
        .replace(/[.,?!@#$%^&*()/\-_=+<>'"`:;{|}]/g, '')
        .toLowerCase();
    };

    let arr = simplifyStr().split(""); 
};

/* 
*   SET parameter to str
*   REMOVE non-letters and spaces from str
*   MAKE str case-insensitive
*   INITIALIZE arr then CONVERT str to an arr
*   INITIALIZE reversedArr with the value being arr.reverse
*   IF arr equals reversedArr return true
*   ELSE return false
*/

// Do not edit below this line
module.exports = palindromes;
