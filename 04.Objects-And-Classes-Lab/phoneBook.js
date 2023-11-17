function phoneBook(arrayOfStrings) {
    let phones = {}

    for (let element of arrayOfStrings) {
        elementInfo = element.split(' ')
        let key = elementInfo[0]
        let value = elementInfo[1]
        phones[key] = value
    }

    for (const [key, value] of Object.entries(phones)) {
        console.log(`${key} -> ${value}`)
    }
}

phoneBook(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344'])