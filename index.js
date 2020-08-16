// Code your solution here
function findMatching(arr,str){
let list = arr.filter(dr => dr.toLowerCase() === str.toLowerCase());
return list;
}

function fuzzyMatch(arr,str){
let list = arr.filter(s => s.charAt(0)=== str[0]);
return list;
}

function matchName(arr,str){
let list = arr.filter(s =>s.name === str);
return list;

}