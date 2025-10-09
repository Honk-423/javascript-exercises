const fibonacci = function(indexNum) {
    let arr = [];

    if (arr.length == 0) {
        arr.push(1, 1);
    };
        
    let curr;
    let next;
    let sum;

    for (let i = 0; arr.length < indexNum; i++) {
        curr = arr[i];
        next = arr[i + 1];
        sum = curr + next;
        
        arr.push(sum);
    };

    if (indexNum == 1) {
        return arr.at(0);
    } else if (indexNum == 2) {
        return arr.at(1);
    } else {
        return sum;
    };
};

// Do not edit below this line
module.exports = fibonacci;
