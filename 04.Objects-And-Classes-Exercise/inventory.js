function registerForHeroes(arrayOfStrings) {
    let heroes = []

    for (let heroData of arrayOfStrings) {
        let [heroName, heroLevel, heroItems] = heroData.split(" / ")
        let heroObject = {
            name: heroName,
            level: Number(heroLevel),
            items: heroItems,
        }

        heroes.push(heroObject)
    }

    heroes.sort((a,b) => a.level - b.level)
    
    for (const hero of heroes) {
        console.log(`Hero: ${hero.name}`)
        console.log(`level => ${hero.level}`)
        console.log(`items => ${hero.items}`)
    }
    
}

registerForHeroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )
