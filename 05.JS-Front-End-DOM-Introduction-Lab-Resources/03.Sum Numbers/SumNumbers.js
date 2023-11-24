function calc() {
    const firstNumberElementRef = document.getElementById("num1")
    const firstNumberValue = firstNumberElementRef.value
    const firstNumberAsNum = Number(firstNumberValue)

    const secondNum = Number(document.getElementById("num2").value)

    const sum = firstNumberAsNum + secondNum

    document.getElementById("sum").value = sum

}
