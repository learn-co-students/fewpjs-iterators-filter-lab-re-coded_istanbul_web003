// Code your solution here

function findMatching(arr, str) {
  let match = arr.filter((driver) => {
    return driver.toLowerCase() == str.toLowerCase();
  });
  return match;
}

function fuzzyMatch(arr, str) {
  let match = arr.filter((driver) => {
    return driver[0] === str[0];
  });
  return match;
}

function matchName(arr, str) {
  let match = arr.filter((driver) => {
    return driver.name === str;
  });
  return match;
}
