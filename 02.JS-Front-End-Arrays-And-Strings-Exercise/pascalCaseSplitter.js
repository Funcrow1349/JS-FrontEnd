function splitPascalCase(someString) {
    let regEx = /[A-Z][a-z]*/gm
    result = someString.match(regEx)

    console.log(result.join(", "))
}

splitPascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan')