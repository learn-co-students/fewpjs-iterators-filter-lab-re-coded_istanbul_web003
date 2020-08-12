function findMatching(drivers, string){

    const result = drivers.filter( driver => driver.toLowerCase() === string.toLowerCase());

    return result;

}


function fuzzyMatch(drivers, string){

    const result = drivers.filter(driver => driver.substring(0,2) === string);

    return result;


}


function matchName(drivers, string){

    const result = drivers.filter(driver => driver.name === string);

    return result;


}