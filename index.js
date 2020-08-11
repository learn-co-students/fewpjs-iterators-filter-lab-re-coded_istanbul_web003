// Code your solution here

function findMatching(arr, str){
    str = str.toUpperCase();
    return arr.filter(driver => driver.toUpperCase() == str)
}

function fuzzyMatch(arr, str){
    str = str.toUpperCase()
    return arr.filter(driver => driver[0].toUpperCase() === str[0])
}

function matchName(arr, str){
    str = str.toUpperCase();
    return arr.filter(driverObject => driverObject.name.toUpperCase() === str)
}