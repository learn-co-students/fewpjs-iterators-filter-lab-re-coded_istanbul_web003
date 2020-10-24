function findMatching (array, string) {
  let match =  array.filter(x => x.toLowerCase() === string.toLowerCase());
  return match;
}


function fuzzyMatch(array, string) {
    let substring = array.filter( x=> x[0]=== string[0]);
    return substring;
}

function matchName(array, string) {
    let object = array.filter(x => x.name ==string )
    return object;
} 
