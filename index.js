const findMatching = (arr,str)=>{
    return arr.filter(x => str.toLowerCase()===x.toLowerCase()  )
}

const fuzzyMatch = (arr,str)=>{
    const regExp = RegExp("^"+str)
    return arr.filter(x=> x.match(regExp))
}

const matchName = (arr,str)=>{
    return arr.filter(x=> x.name===str)
  
  }