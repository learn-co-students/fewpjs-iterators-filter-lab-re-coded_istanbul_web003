// Code your solution here
function findMatching(drivers, str){
    let results = drivers.filter(driver=>driver.toUpperCase()===str.toUpperCase());
    if(results===[]){
        return results=[]
    }
    return results
}
function fuzzyMatch(drivers, driverName){
    let results = drivers.filter(driver=>driver.charAt(0)===driverName.charAt(0));
    return results; 
}

function matchName(drivers, name){
    return drivers.filter(driver=>driver.name.toUpperCase()===name.toUpperCase())
}