function censoreWords(someText, wordToReplace) {
    let censoredWord = ""
    for (const element in wordToReplace) {
        censoredWord += "*"
    }

    let result = someText

    while (result.includes(wordToReplace)) {
        result = result.replace(wordToReplace, censoredWord)
    }
    console.log(result)
}

censoreWords('A small sentence with some words', 'small')