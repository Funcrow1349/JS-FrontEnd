function findHashtags(someString) {
    let regEx = /#[A-Za-z]+/gm
    result = someString.match(regEx)

    for (let element of result) {
        console.log(element.slice(1))
    }
}

findHashtags('The symbol # is known #variously in English-speaking #regions as the #number sign')