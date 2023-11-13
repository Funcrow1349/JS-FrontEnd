function printDNA(helixLength) {
    const helix = 'ATCGTTAGGG'.split("")

    while (true) {
        rows = helixLength

        for (let i = 2; i <= 4; i ++) {
            if (helixLength <= 0) {
                break
            }
            let firstLetter = helix.shift()
            let secondLetter = helix.shift()
            console.log("*".repeat(4 - i) + firstLetter + "-".repeat(i - 2) + "-".repeat(i - 2) + secondLetter + "*".repeat(4 - i))
            helix.push(firstLetter)
            helix.push(secondLetter)
            helixLength -= 1
        }

        if (helixLength <= 0) {
            break
        }

        let firstLetter = helix.shift()
        let secondLetter = helix.shift()
        console.log(`*${firstLetter}--${secondLetter}*`)
        helix.push(firstLetter)
        helix.push(secondLetter)
        helixLength -= 1
        
    }
}

printDNA(4)
printDNA(10)