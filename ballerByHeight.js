const sortPeoples = function(names, heights) {
    let tempHeights=[...heights]

    let sortedHeight = heights.sort((a,b)=>b-a)
    let sortedNames =[]
    for(let ind of sortedHeight){
       let nameInd= tempHeights.indexOf(ind)
       sortedNames.push(names[nameInd])
    }

    return sortedNames

    
};
let names = ["Mary","John","Emma"], heights = [180,165,170]

console.log(sortPeoples(names, heights))

