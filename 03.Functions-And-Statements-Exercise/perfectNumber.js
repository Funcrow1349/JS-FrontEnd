function findPerfectNumber(num) {
    let totalSum = 0

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            totalSum += i
        }
    }

    if (totalSum === num) {
        console.log("We have a perfect number!")
    } else {
        console.log("It's not so perfect.")
    }
}

findPerfectNumber(6)
findPerfectNumber(28)
findPerfectNumber(1236498)