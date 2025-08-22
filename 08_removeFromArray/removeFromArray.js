const removeFromArray = function(arr, ...elems) {
    // ADD parameter arr and rest parameter elems to function
    for (let elem of elems) {
        // INIT for... of loop
        for (let i = 0; i < arr.length; i++) {
            // INIT for loop
            if (arr.indexOf(elem) > -1) {
                // IF arr's index is greater than -1
                arr.splice(arr.indexOf(elem), 1);
                // SPLICE elem out of arr
            }
        }
    }
    console.log(arr);
    return arr;
    // RETURN arr
};

removeFromArray([1, 2, 3, 4], 7, 2);


// Do not edit below this line
module.exports = removeFromArray;
