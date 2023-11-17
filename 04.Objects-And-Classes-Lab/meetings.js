function scheduleMeetings(arrayOfStrings) {
    let meetings = {}

    for (let string of arrayOfStrings) {
        let [key, value] = string.split(" ")
        if (meetings.hasOwnProperty(key)) {
            console.log(`Conflict on ${key}!`)
        } else {
            meetings[key] = value
            console.log(`Scheduled for ${key}`)
        }
    }

    for (const [key, value] of Object.entries(meetings)) {
        console.log(`${key} -> ${value}`)
    }
}

scheduleMeetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim'])