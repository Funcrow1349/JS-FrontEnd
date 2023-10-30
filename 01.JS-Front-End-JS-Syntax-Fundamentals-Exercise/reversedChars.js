function reverseChars(char1, char2, char3) {
    let initialString = "" + char1 + char2 + char3
    let reversedString = ""
    
    for (let i = initialString.length - 1; i > -1; i--) {
        reversedString += initialString[i] + " "
    }
    
    console.log(reversedString.trim())
}

reverseChars("A", "B", "C")