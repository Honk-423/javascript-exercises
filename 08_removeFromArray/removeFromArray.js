const removeFromArray = function(arr, ...elems) {
    // ADD parameter arr and rest parameter elems to function
    for (let elem of elems) {
        // INIT for... of loop
        arr.splice(arr.indexOf(elem), 1);
        // SPLICE arr from elem with delete count of one 
    }
    console.log(arr);
    return arr;
    // RETURN arr
};

removeFromArray([1, 2, 3, 4], 3, 2);


// Do not edit below this line
module.exports = removeFromArray;
