// Code your solution here
function findMatching(drivers, name) {
   return drivers.filter(x => x.toUpperCase() === name.toUpperCase())
}
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
console.log(findMatching(drivers, "bobby"))

function fuzzyMatch(drivers, str) {
    return drivers.filter(x => x.startsWith(str))    
}
function matchName(params, str) {
    return params.filter(x => x.name === str)
    
}