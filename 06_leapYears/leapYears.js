const leapYears = function(year) {
    // Years divisible by 100 are leap years ONLY if they are divisible by 400
    // Without this condition, years like 1900 becomes true even though they're
    // actually not.
    if (year % 100 === 0)
        return year % 400 === 0;
    else return year % 4 === 0;
};

// Do not edit below this line
module.exports = leapYears;
