// Code your solution here
// findMatching()
//       1) returns all drivers that match the passed in name
//       2) returns matching drivers if case does not match but letters do
//       3) returns an empty array if there is no match
//     fuzzyMatch()
//       4) returns a driver if beginning provided letters match
//       5) does not return drivers if only middle or ending letters match
//       6) does not return drivers if only middle or ending letters match
//     matchName()
//       7) accesses the data structure to check if name matches
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, name){
    const searchResult= drivers.filter(person=>person.toUpperCase()===name.toUpperCase());
    if(searchResult===[]){
        return searchResult=[];
    }
    return searchResult;
}

findMatching(drivers, "bobby");

function fuzzyMatch(drivers, name){
    const searchResult= drivers.filter(person=> person.charAt(0)===name.charAt(0));
    return searchResult;
}

fuzzyMatch(drivers, "bobby");

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(drivers,name){
    const searchResult= drivers.filter(personObj=> personObj.name===name);


    return searchResult;
}

matchName(drivers, "bobby");