function createMatrix(num) {
    for (let i = 0; i < num; i++) {
        let currentRow = []
        for (let j = 0; j < num; j++) {
            currentRow.push(num)
        }
        console.log(currentRow.join(" "))
    }
}

createMatrix(3)
createMatrix(7)
createMatrix(2)
