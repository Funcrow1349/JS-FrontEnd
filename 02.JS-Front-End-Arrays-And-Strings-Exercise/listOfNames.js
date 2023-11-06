function sortNames(arrayOfNames) {
    arrayOfNames.sort((a, b) => {
        return a.localeCompare(b)
    })

    let index = 1

    for (const name of arrayOfNames) {
        console.log(`${index}.${name}`)
        index++
    }
}

sortNames(["John", "Bob", "Christina", "Ema"])