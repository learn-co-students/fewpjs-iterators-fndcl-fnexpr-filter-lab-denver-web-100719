// Code your solution here

function findMatching(driverArray, string){
    return driverArray.filter(driver => driver.toLowerCase() == string.toLowerCase())
}

function fuzzyMatch(driverArray, string){
    return driverArray.filter(driver => driver.substring(0, string.length) == string)
}

function matchName(driverArray, string){
    return driverArray.filter(driver => driver.name == string)
}