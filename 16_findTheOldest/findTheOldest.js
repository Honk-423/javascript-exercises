const findTheOldest = function(arrOfObjs) {
    let currentYear;
    
    const ages = arrOfObjs.map((person) => {
        if (person.yearOfDeath === undefined) {
            
            let currentDate = new Date;
            currentYear = currentDate.getFullYear();
            
            return currentYear - person.yearOfBirth;
        } else {
            return person.yearOfDeath - person.yearOfBirth
        };
    });
    

    const sortedAges = ages.sort((a, b) => a - b);
    
    const oldest = sortedAges.findLast((item) => item);

    for (let person of arrOfObjs) {
        if (person.yearOfDeath - person.yearOfBirth === oldest ||
           currentYear - person.yearOfBirth === oldest) {
            return person;
        };
    };

    console.log(oldest)
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
