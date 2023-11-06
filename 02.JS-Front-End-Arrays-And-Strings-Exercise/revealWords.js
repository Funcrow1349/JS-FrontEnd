function revealWords(words, sentence) {
    let wordsToReveal = words.split(", ")
    let sentenceToCompare = sentence.split(" ")

    for (let i = 0; i < wordsToReveal.length; i++) {
        for (let j = 0; j < sentenceToCompare.length; j++) {
            if (wordsToReveal[i].length === sentenceToCompare[j].length && sentenceToCompare[j].includes("*")) {
                sentenceToCompare[j] = wordsToReveal[i]
            }
        }
    }

    console.log(sentenceToCompare.join(" "))
}

revealWords('great, learning', 
            'softuni is ***** place for ******** new programming languages'
            )