function listTowns(arrayOfTowns) {
    for (const town of arrayOfTowns) {
        let [name, latitude, longitude] = town.split(" | ")
        let townInfo = {
            town: name,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }
        console.log(townInfo)
    }
}

listTowns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)