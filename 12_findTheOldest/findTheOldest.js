const findTheOldest = function(peopleList) {
    const currentYear = new Date().getFullYear();
    
    // const sortedPeopleByDescAge = peopleList.toSorted((p1, p2) => {
    //     // if yearOfDeath doesn't exist (assumably still alive), use current year
    //     return ((p2.yearOfDeath || currentYear) - p2.yearOfBirth) -
    //     ((p1.yearOfDeath || currentYear) - p1.yearOfBirth)
    // })
    // return sortedPeopleByDescAge[0];

    const getAge = (person) =>
        (person.yearOfDeath || currentYear) - person.yearOfBirth;

    return peopleList.reduce((oldestPerson, currentPerson) =>
        getAge(oldestPerson) > getAge(currentPerson) ?
        oldestPerson : currentPerson);
};

// Do not edit below this line
module.exports = findTheOldest;
