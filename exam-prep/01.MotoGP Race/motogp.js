function motoGpRace(input) {
    const numberOfRiders = Number(input.shift())

    let riders = []

    for (let index = 0; index < numberOfRiders; index++) {
        const riderInfo = input[index].split("|")
        const riderObject = {
            rider: riderInfo[0],
            fuelCapacity: Number(riderInfo[1]),
            position: Number(riderInfo[2]),
        }

        riders.push(riderObject)
        
    }

    const commands = input.slice(numberOfRiders)
    
    for (const commandLine of commands) {
        if (commandLine === "Finish") {
            break

        } else{
            const command = commandLine.split(" - ")

            let action = command[0]
            let riderName = command[1]
            
            
            if (action === "StopForFuel") {
                let minimumFuel = Number(command[2])
                let changedPosition = Number(command[3])
                let riderObj = riders.find(obj => obj.rider === riderName)
                if (riderObj.fuelCapacity < minimumFuel) {
                    riderObj.fuelCapacity = 100
                    riderObj.position = changedPosition
                    console.log(`${riderName} stopped to refuel but lost his position, now he is ${changedPosition}.`)
                    // if (riderObj.position != numberOfRiders) {
                    //     riderObj.position = changedPosition
                    //     // for (const rider of riders) {
                    //     //     if (rider.rider !== riderName && rider.position <= riderObj.position && rider.position != 1) {
                    //     //         rider.position -= 1
                    //     //     }
                    //     // }
                    //     console.log(`${riderName} stopped to refuel but lost his position, now he is ${changedPosition}."`)
                    // }
                } else{
                    console.log(`${riderName} does not need to stop for fuel!`)
                }
                
            } else if (action === "Overtaking") {
                let secondRiderName = command[2]

                let overtakingRider = riders.find(obj => obj.rider === riderName)
                let overtakenRider = riders.find(obj => obj.rider === secondRiderName)

                let overtakingRiderInitialPosition = overtakingRider.position
                let overtakenRiderInitialPosition = overtakenRider.position
                
                
                if(overtakingRiderInitialPosition < overtakenRiderInitialPosition) {
                    overtakingRider.position = overtakenRiderInitialPosition
                    overtakenRider.position = overtakingRiderInitialPosition
                    console.log(`${riderName} overtook ${secondRiderName}!`)

                }
            } else if (action === "EngineFail") {
                const lapsLeft = Number(command[2])
                let failedRaider = riders.find((rider) => rider.rider === riderName)
                riders = riders.filter(rider => rider !== failedRaider)

                console.log(`${riderName} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`)
            }
        }
    }

    // riders.sort((a, b) => a.position - b.position)
    riders.forEach((r) => {
        console.log(r.rider)
        console.log(`  Final position: ${r.position}`)
    })
}


motoGpRace(
    ["3",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|2",
    "Jorge Lorenzo|80|3",
    "StopForFuel - Valentino Rossi - 50 - 1",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"]
)

motoGpRace(["4",
"Valentino Rossi|100|1",
"Marc Marquez|90|3",
"Jorge Lorenzo|80|4",
"Johann Zarco|80|2",
"StopForFuel - Johann Zarco - 90 - 5",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])