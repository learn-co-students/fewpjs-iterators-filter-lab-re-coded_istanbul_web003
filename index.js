function findMatching(drivers, driverName) {
    return drivers.filter(driver => driver.toLowerCase() === driverName.toLowerCase())
}

function fuzzyMatch(drivers, nameInit) {
    return drivers.filter(driver => driver.startsWith(nameInit));
}

function matchName(drivers, driverName) {
    return drivers.filter(({name}) => name.toLowerCase() === driverName.toLowerCase())
}