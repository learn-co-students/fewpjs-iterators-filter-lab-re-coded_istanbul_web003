// Code your solution here
function findMatching (array, string) {
  let function1 =  array.filter(x => x.toLowerCase() === string.toLowerCase());
  return function1;
}


function fuzzyMatch(array, string) {
    let function2 = array.filter( x=> x[0]=== string[0]);
    return function2;
}

function matchName(array, string) {
    let function3 = array.filter(x => x.name ==string )
    return function3;
}