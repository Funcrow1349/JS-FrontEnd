function findSubstring(word, text) {
    text = text.toLowerCase()
    text = text.split(" ")
    output = `${word} not found!`

    for (let element of text) {
        if (element === word) {
            output = word
        }
    }

    console.log(output)
}

findSubstring('javascript', 'JavaScript is the best programming language')
findSubstring('python', 'JavaScript is the best programming language')