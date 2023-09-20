// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

const arrayOfFirstDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const firstTwoDrivers = returnFirstTwoDrivers(arrayOfFirstDrivers);
console.log(firstTwoDrivers);

const returnLastTwoDrivers = function(lastDrivers){
    return lastDrivers.slice(2);
};

const arrayOfLastDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const lastDrivers = returnLastTwoDrivers(arrayOfLastDrivers);
console.log(lastDrivers)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier){
    return function (fare){
        return fare * multiplier;
    };
};

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, selectingDrivers){
    return selectingDrivers(drivers);
}

const arrayOfDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

console.log(returnFirstTwoDrivers(arrayOfDrivers));
console.log(returnLastTwoDrivers(arrayOfDrivers));