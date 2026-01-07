const sumAll = function(bound1, bound2) {

    if (bound1 < 0 || bound2 < 0 ||
        typeof bound1 != "number" || 
        typeof bound2 != "number") {
            return "ERROR";
        }

    let acc = 0,
        from = Math.min(bound1, bound2),
        to = Math.max(bound1, bound2);

    for (let i = from; i <= to; i++) {
        acc += i;
    }
    return acc;
};

// Do not edit below this line
module.exports = sumAll;
