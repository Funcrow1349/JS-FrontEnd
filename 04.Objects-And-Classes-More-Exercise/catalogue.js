function catalogue(arrayOfProducts) {
    arrayOfProducts = arrayOfProducts.sort()
    let arrayOfFirstLetters = []
    
    for (const element of arrayOfProducts) {
        if (!arrayOfFirstLetters.includes(element[0])) {
            arrayOfFirstLetters.push(element[0])
        }
    }

    for (const letter of arrayOfFirstLetters) {
        console.log(letter)

        for (const element of arrayOfProducts) {
            if (letter === element[0]) {
                let [productName, productPrice] = element.split(" : ")
                console.log("  " + productName + ": " + productPrice)
            }
        }
    }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]
    )