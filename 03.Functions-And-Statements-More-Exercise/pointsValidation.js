function validityChecker(arrayOfPoints) {
    let [x1, y1, x2, y2] = arrayOfPoints
    let isValid = ""
    let result1 = (Math.sqrt((0 - x1) ** 2 + (0 - y1) ** 2))
    let result2 = (Math.sqrt((x2 - 0) ** 2 + (y2 - 0) ** 2))
    let result3 = (Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2))
    if (Number.isInteger(result1)) {
        isValid = "valid"
    } else {
        isValid = "invalid"
    }
    console.log(`{${x1}, ${y1}} to {0, 0} is ${isValid}`)

    if (Number.isInteger(result2)) {
        isValid = "valid"
    } else {
        isValid = "invalid"
    }
    console.log(`{${x2}, ${y2}} to {0, 0} is ${isValid}`)

    if (Number.isInteger(result3)) {
        isValid = "valid"
    } else {
        isValid = "invalid"
    }
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid}`)
}

validityChecker([3, 0, 0, 4])
validityChecker([2, 1, 1, 1])