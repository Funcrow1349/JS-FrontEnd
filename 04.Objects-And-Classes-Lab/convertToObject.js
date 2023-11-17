function convertToObject(stringInJSONFormat) {
    JSONAsObj = JSON.parse(stringInJSONFormat)

    for (const [key, value] of Object.entries(JSONAsObj)) {
        console.log(`${key}: ${value}`)
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')