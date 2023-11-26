function sumTable() {
    const tableContent = document.querySelectorAll("table tr")
    let totalSum = 0

    for (let index = 1; index < tableContent.length; index++) {
        const cells = tableContent[index].children
        const currentPrice = Number(cells[1].textContent)
        totalSum += currentPrice
    }

    document.getElementById("sum").textContent = totalSum
}