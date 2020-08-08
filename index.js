// Code your solution here
function findMatching(arr, str){
    const lastArr = [];
    const newArr = arr.filter(k =>  new RegExp(str, "i").test(k))
    return newArr;
  }

function fuzzyMatch(arr, str) {
    let lastArr = []
    arr.map(k => k.startsWith(str) && lastArr.push(k));
    return lastArr;
}

function matchName(arr, str) {
    const newArr = arr.filter(k => k.name === str)
    return newArr
}