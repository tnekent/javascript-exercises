const palindromes = function (input) {
    let origString = input.toLowerCase();
    
    const origStringArray = origString.split(""),
        filteredStringArray = origStringArray.filter(char => {
            const charCode = char.charCodeAt(0)
            return (charCode > 47 && charCode < 58) || (charCode > 96 && charCode < 123); 
        }),
        reversedString = filteredStringArray.toReversed().join("");

    origString = filteredStringArray.join("");
    return reversedString === origString;
};

// Do not edit below this line
module.exports = palindromes;
