const removeFromArray = function(arr, elem) {
    // ADD params arr and elem to function
    arr.splice(arr.indexOf(elem), 1); // arr.indexOf(elem) works for a single value but that's it
    // SPLICE arr from elem with delete count of one
    console.log(arr);
    return arr;
    // RETURN arr
};

removeFromArray([1, 2, 3, 4], 3);


// Do not edit below this line
module.exports = removeFromArray;
