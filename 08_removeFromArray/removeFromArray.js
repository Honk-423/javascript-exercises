const removeFromArray = function(arr, ...elems) {
    // ADD parameter arr and rest parameter elems to function
    for (let elem of elems) {
        // INIT for... of loop
        for (let i = 0; i < arr.length; i++) {
            if (arr.indexOf(elem) > -1) {
                arr.splice(arr.indexOf(elem), 1);
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
