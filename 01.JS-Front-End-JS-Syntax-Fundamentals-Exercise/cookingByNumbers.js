function cooking (num, act1, act2, act3, act4, act5) {
    const cookingActs = [act1, act2, act3, act4, act5]
    let result = num

    for (let i = 0; i < cookingActs.length; i++) {
        if (cookingActs[i] == "chop") {
            result /= 2
        } else if (cookingActs[i] == "dice") {
            result = Math.sqrt(result)
        } else if (cookingActs[i] == "spice") {
            result += 1
        } else if (cookingActs[i] == "bake") {
            result *= 3
        } else if (cookingActs[i] == "fillet") {
            result *= 0.80
        }
        console.log(result)
    }
}

cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cooking('9', 'dice', 'spice', 'chop', 'bake','fillet')