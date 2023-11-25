function colorize() {
    const tableContent = document.getElementsByTagName("tr")

    let index = 0

    for (const element of Array.from(tableContent)) {
        index++
        if (index % 2 === 0) {
            element.style.background = 'teal'
        }
        
    }
}