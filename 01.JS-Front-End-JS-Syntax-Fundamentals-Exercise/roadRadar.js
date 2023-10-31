function roadRadar(speed, area) {
    let speedLimit = 0
    let status = ""
    let speedDiff = 0

    if (area == "motorway") {
        speedLimit = 130
    } else if (area == "interstate") {
        speedLimit = 90
    } else if (area == "city") {
        speedLimit = 50
    } else if (area == "residential") {
        speedLimit = 20
    }

    if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    } else {
        speedDiff = Math.abs(speedLimit - speed)
        if (speedDiff <= 20) {
            status = "speeding"
        } else if (speedDiff <= 40) {
            status = "excessive speeding"
        } else {
            status = "reckless driving"
        }

        console.log(`The speed is ${speedDiff} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
    }
}

roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')