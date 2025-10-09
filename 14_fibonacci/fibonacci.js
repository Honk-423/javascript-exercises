const fibonacci = function(indexNum) {
    let arr = [];

    if (arr.length == 0) {
        arr.push(1, 1);
    };
        
    let curr;
    let next;

    for (let i = 0; arr.length < indexNum; i++) {
        curr = arr[i];
        next = arr[i + 1];
    };

    console.log(arr);
};

// Do not edit below this line
module.exports = fibonacci;
