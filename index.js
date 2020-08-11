// Code your solution here
const findMatching = (arr, str) => {
  return arr.filter((e) => e.toLowerCase() === str.toLowerCase());
};

const fuzzyMatch = (arr, str) => {
  return arr.filter((e) => e.slice(0, str.length) === str);
};

const matchName = (arr, str) => {
  return arr.filter((e) => e.name === str);
};
