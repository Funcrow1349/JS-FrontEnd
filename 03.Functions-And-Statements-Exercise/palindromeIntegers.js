function checkPalindrome(arrayOfNumbers) {

    function isPalindrome(number) {
        let numberAsString = String(number)
        let numberAsArray = numberAsString.split("")
        let reversedArray = numberAsArray.reverse()
        let reversedNumberAsString = reversedArray.join("")
        let reversedNumber = Number(reversedNumberAsString)
        return number === reversedNumber
    }

    for (const num of arrayOfNumbers) {
        if (isPalindrome(num)) {
            console.log('true')
        } else {
            console.log('false')
        }
    }
}

checkPalindrome([123,323,421,121])
checkPalindrome([32,2,232,1010])