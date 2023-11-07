function userLogin(arr) {
    username = arr.shift()
    loginAttempts = 0
    
    for (let element of arr) {
        element = element.split('')
        element = element.reverse().join('')
        loginAttempts += 1
        
        if (username === element) {
            console.log(`User ${username} logged in.`)
        } else if (loginAttempts === 4) {
            console.log(`User ${username} blocked!`)
        } else {
            console.log("Incorrect password. Try again.")
        }
    }
}

userLogin(['Acer','login','go','let me in','recA'])
userLogin(['momo','omom'])
userLogin(['sunny','rainy','cloudy','sunny','not sunny'])