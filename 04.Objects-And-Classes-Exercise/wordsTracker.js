function wordsTracker(arrayOfWords) {
    let searchedWords = arrayOfWords.shift().split(" ")
    let foundWords = {}

    for (const word of searchedWords) {
        let currentCount = 0

        for (const element of arrayOfWords) {
            if (word === element) {
                currentCount += 1
            } 
        }

        foundWords[word] = currentCount
    }

    let entries = Object.entries(foundWords).sort((a, b) => b[1] - a[1])
    for (const [key, value] of entries) {
            console.log(`${key} - ${value}`)
        }
    
}

wordsTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    )