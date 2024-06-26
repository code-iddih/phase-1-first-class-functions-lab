// Code your solution in this file!

// First Two Drivers

const returnFirstTwoDrivers = function(driversArray) {
   
    return driversArray.slice(0, 2);
};

// Last Two Drivers

const returnLastTwoDrivers = function(driversArray) {
   
    return driversArray.slice(-2);
};

// Selecting Drivers

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Creating Fare Multiplier

function createFareMultiplier(multiplier) {
  
    return function(value) {
        return value * multiplier;
    };
}

// Creating a Fare Doubler

const fareDoubler = createFareMultiplier(2);

// Creatinga a Fare Tripler

const fareTripler = createFareMultiplier((3));

// Selecting Different Drivers

function selectDifferentDrivers(arrayOfDrivers, selectorFunction) {
    
    return selectorFunction(arrayOfDrivers);
}
