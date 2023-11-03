function reverseArray(elementsCount, arrayOfNumbers) {
    const newArray = []
    for (let i = 0; i < elementsCount; i++) {
        newArray.push(arrayOfNumbers[i])
    }

    const reversedArray = newArray.reverse()
    console.log(reversedArray.join(" "))
}

reverseArray(3, [10, 20, 30, 40, 50])

