let chunkOne = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
let chunkTwo = [ 'Lucas', 'Jake', 'Scott', 'Amy', 'Molly', 'Hannah', 'Lucas' ];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
     for ( let i = 0 ; i < firstArray.length; i++) {
        const item = firstArray[i]
        newArray.push(item)
    } 


    for ( let j = 0 ; j < secondArray.length; j++) {
        const item = secondArray[j]
        newArray.push(item)
}
return newArray
}

console.log(mergeArrays(chunkOne, chunkTwo));
