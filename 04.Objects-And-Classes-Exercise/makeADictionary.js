function makeADictionary (arrayOfJSONs) {
    let dictionary = {}

    for (const string of arrayOfJSONs) {
        let currentObject = JSON.parse(string)
        const objectData = Object.entries(currentObject)
        let key = objectData[0][0]
        let value = objectData[0][1]
        dictionary[key] = value        
    }

    let dictionaryKeys = []

    for (const key of Object.keys(dictionary)) {
        dictionaryKeys.push(key)
    }

    let sortedDictionaryKeys = dictionaryKeys.sort()

    for (const key of sortedDictionaryKeys) {
        console.log(`Term: ${key} => Definition: ${dictionary[key]}`)
    }  
}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )