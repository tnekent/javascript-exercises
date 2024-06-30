const removeFromArray = function(arr, ...elements) {
    return arr.filter(value => !elements.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
