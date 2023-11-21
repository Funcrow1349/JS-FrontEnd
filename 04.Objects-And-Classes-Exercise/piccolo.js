function parkCars(arrayOfCommands) {
    let parkingLot = []
    
    for (const command of arrayOfCommands) {
        let [action, car] = command.split(", ")

        if (action === "IN" && !parkingLot.includes(car)){
            parkingLot.push(car)
        } else if (action === "OUT" && parkingLot.includes(car)) {
            let index = parkingLot.indexOf(car)
            parkingLot.splice(index, 1)
        }
    }

    if (parkingLot.length === 0) {
        console.log("Parking Lot is Empty")
    } else {
        parkingLot.sort().forEach((c) => console.log(c))
    }

}

parkCars(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)

parkCars(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
)