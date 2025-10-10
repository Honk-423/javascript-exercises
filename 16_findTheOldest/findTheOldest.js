const findTheOldest = function(arrOfObjs) {
    let currentYear;

    const ages = arrOfObjs.map((person) => {
        if (person.yearOfDeath === undefined) {
            
            let currentDate = new Date;
            currentYear = currentDate.getFullYear();
            
            return currentYear - person.yearOfBirth;
        } else {
            return person.yearOfDeath - person.yearOfBirth;
        };
    });
    
    const oldest = ages.sort((a, b) => a - b).findLast((item) => item);

    for (let person of arrOfObjs) {
        if (person.yearOfDeath - person.yearOfBirth === oldest) {
            return person;
        } else if (currentYear - person.yearOfBirth === oldest) {
            return person;
        };
    };
};


// Do not edit below this line
module.exports = findTheOldest;
