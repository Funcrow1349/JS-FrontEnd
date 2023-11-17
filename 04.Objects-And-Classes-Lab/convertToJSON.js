function convertToJSON(name, lastName, hairColor) {
    const personInfo = {
        name: name,
        lastName: lastName,
        hairColor: hairColor,
    }

    personInfoAsJSON = JSON.stringify(personInfo)
    console.log(personInfoAsJSON)
}

convertToJSON('George', 'Jones', 'Brown')