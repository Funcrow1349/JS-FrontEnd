function oddOccurrences(stringOfElements) {
    let elements = stringOfElements.toLowerCase().split(" ")
    
    let map = new Map()

    elements.forEach((element) => {
        if (map.has(element)) {
            let oldValue = map.get(element)
            let newValue = oldValue + 1
            map.set(element, newValue)
        } else {
            map.set(element, 1)
        }
    })

    let result = []

    map.forEach((value, key) => {
        if (value % 2 !== 0) {
            result.push(key)
        }
    })

    console.log(result.join(" "))
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')