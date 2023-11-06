function printNthElement(array, step) {
    let result = []

    for (let index = 0; index < array.length; index+=step) {
        result.push(array[index])
    }

    return(result)
}

printNthElement(['5','20','31','4','20'], 2)