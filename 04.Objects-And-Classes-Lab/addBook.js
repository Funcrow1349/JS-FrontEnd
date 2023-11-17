function addressBook (arrayOfStrings) {
    let addressBook = {}

    for (let element of arrayOfStrings) {
        let [key, value] = element.split(":")
        addressBook[key] = value
    }

    const addresses = Object.entries(addressBook)
    const sortedAddresses = addresses.sort()

    for (const [key, value] of sortedAddresses) {
        console.log(`${key} -> ${value}`)
    }
}

addressBook(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd'])