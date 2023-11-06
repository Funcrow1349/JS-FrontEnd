function countStrings(someText, someWord) {
    const splitArray = someText.split(" ")
    let counter = 0

    for (const element of splitArray) {
        if (element === someWord) {
            counter += 1
        }
    }
    console.log(counter)
}

countStrings('This is a word and it also is a sentence', 'is')