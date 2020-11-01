// Code your solution here


function findMatching (drivers, string){
return drivers.filter((e) => {
    return e.toLowerCase() === string.toLowerCase() 
});
}

function fuzzyMatch (drivers,string) {
    return drivers.filter((e) => {
        return e.toLowerCase().indexOf(string.toLowerCase()) === 0
    });
}

function matchName(drivers, string) {
    let driversObject = drivers.filter(x => x.name ==string )
    return driversObject;
} 