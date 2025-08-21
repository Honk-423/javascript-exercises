const removeFromArray = function(arr, ...elems) {
    // ADD parameter arr and rest parameter elems to function
    for (let elem of elems) {
        // INIT for... of loop
        arr.splice(arr.indexOf(elem), 1);
        // SPLICE arr from elem with delete count of one 
        if (arr[elem]) {
            arr.splice(arr.indexOf(elem), 1);
        }
        // IF there's still an elem inside of arr that matches elem,
        // remove it
    }
    console.log(arr);
    return arr;
    // RETURN arr
};

removeFromArray([1, 2, 3, 4], 7, "tacos");


// Do not edit below this line
module.exports = removeFromArray;
