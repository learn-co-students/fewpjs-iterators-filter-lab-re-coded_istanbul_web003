// Code your solution here
function findMatching(arrDriver, name) {
  return arrDriver.filter((driver) => {
    return driver.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch(arrDriver, name) {
  return arrDriver.filter((driver) => {
    return driver.slice(0, name.length).toLowerCase() === name.toLowerCase()
  })
}

function matchName(arrDriver, name) {
  return arrDriver.filter((driver) => {
    return driver.name.toLowerCase() === name.toLowerCase()
  })
}
