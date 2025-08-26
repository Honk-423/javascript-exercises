const leapYears = function(year) {
// INIT param year
    
if (year % 4 == 0 && year % 100 != 0) {
    // IF remainder of year divided by 4 equals 0 AND remainder of year 
    // divided by 100 does not equal 0
    return true;
        // RETURN true
}
if (year % 4 == 0 && year % 100 != 0 && year % 400 === true) {
    // IF remainder of year divided by 4 equals 0 AND remainder of year 
    // divided by 100 equal 0, AND remainder of year divided by 400 
    // equals 0
    return true;
        // RETURN true
} else {
    // ELSE
    return false;
    // RETURN false
}
};

leapYears(1996);

// Do not edit below this line
module.exports = leapYears;
