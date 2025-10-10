const findTheOldest = function(arrOfObjs) {
    const ages = arrOfObjs.map(person => person.yearOfDeath 
    - person.yearOfBirth);

    const sortedAges = ages.sort((a, b) => a - b);
    
    console.log()
};


/* 
*   INITIALIZE parameter arrOfObjs so user knows what type of argument
*   is expected.

*   IF person's year of death is undefined
*       USE date to find out how old they would be assuming they were 
*       still alive today.
*   ELSE
*       SUBTRACT each person's year of death by their year of birth to 
*       find out how old they were.

*   COMPARE ages to find the oldest person.

*   RETURN oldest person's entire object.
*/

// Do not edit below this line
module.exports = findTheOldest;
