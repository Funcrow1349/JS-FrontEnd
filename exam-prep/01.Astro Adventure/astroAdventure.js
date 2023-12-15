function solve(input) {
    const astronautsCount = Number(input.shift())
    const astronauts = {}

    for (let index = 0; index < astronautsCount; index++) {
        const [astronautName, oxygenLevel, energyReserves] = input.shift().split(" ")
        
        astronauts[astronautName] = {
            oxygenLevel: Number(oxygenLevel),
            energyReserves: Number(energyReserves),
        }  
    }

    let commandLine = input.shift()

    while (commandLine !== "End") {
        let [action, name, amount] = commandLine.split(" - ")

        if (action === "Explore") {
            // TODO...
        } else if (action === "Refuel") {
            // TODO...
        } else if (action === "Breathe") {
            // TODO...
        }

        let commandLine = input.shift()
    }
}

solve([  '3',
'John 50 120',
'Kate 80 180',
'Rob 70 150',
'Explore - John - 50',
'Refuel - Kate - 30',
'Breathe - Rob - 20',
'End'])