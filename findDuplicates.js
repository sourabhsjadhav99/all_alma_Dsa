function findDuplicates(arr) {
    let duplicates = []
    let unique = []
    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i])
        
        } else {
            duplicates.push(arr[i])
        }
    }
    return duplicates.length>1 ? duplicates:[-1]
}
let arr = [0,3,1,2]
console.log(findDuplicates(arr))