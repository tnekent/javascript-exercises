const fibonacci = function(num) {
    const properNum = Number(num); 

    if (properNum === 0) return 0;
    else if (properNum < 0) return "OOPS";

    let currentResult = 1,
        prevResult = 0;

    for (let i = 1; i < properNum; i++) {
        const temp = currentResult;
        currentResult += prevResult;
        prevResult = temp;
    }

    return currentResult;
};

// Do not edit below this line
module.exports = fibonacci;
