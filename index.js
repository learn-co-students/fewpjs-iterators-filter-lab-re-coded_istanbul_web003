// Code your solution here
const findMatching = (arr, str) => {
  return arr.filter((element) => element.toLowerCase() === str.toLowerCase());
};

const fuzzyMatch = (arr, str) => {
  const numOfQueryLetters = str.length;
  return arr.filter((element) => element.slice(0, numOfQueryLetters) === str);
};

const matchName = (arr, str) => {
  return arr.filter((element) => element.name === str);
};
