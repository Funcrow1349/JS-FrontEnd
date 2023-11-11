function printLoadingBar(percentage) {
    let loadingBar = [".", ".", ".", ".", ".", ".", ".", ".", ".", ".",]

    for (let i = 0; i < percentage / 10; i++) {
        loadingBar[i] = "%"
    }

    if (percentage === 100) {
        console.log("100% Complete!")
    } else {
        console.log(`${percentage}% [${loadingBar.join("")}]`)
        if (percentage < 100) {
            console.log("Still loading...")
        }
    }

}

printLoadingBar(30)
printLoadingBar(90)
printLoadingBar(100)