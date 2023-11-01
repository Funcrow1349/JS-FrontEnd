function convertToUpper(someString) {
    let wordPattern = /\b\w+\b/g;
    let matches = someString.match(wordPattern);

    console.log(matches.map(function(word) {
        return word.toUpperCase();
      }).join(', '));
}

convertToUpper('Hi, how are you?')