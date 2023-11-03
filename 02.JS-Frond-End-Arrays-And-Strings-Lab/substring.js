function selectSubstring(someString, startIndex, countOfChars) {
    let result = someString.slice(startIndex, startIndex + countOfChars)
    console.log(result)
}

selectSubstring('ASentence', 1, 8)