const leapYears = function(year) {
// INIT param year
    
if (year % 4 == 0 && year % 100 != 0) {
    // IF year divided by 4 equals true AND divided by 100 equals false 
    return true;
        // RETURN year
}
if (year % 4 == 0 && year % 100 != 0 && year % 400 === true) {
    // IF year divided by 4 equals true AND divided by 100 equals true, 
    // AND divided by 400 equals true
    return true;
        // RETURN year
} else {
    return false;
}
};

leapYears(1996);

// Do not edit below this line
module.exports = leapYears;
