function buildPyramid(baseSize, stepHeight) {
    let stone = 0
    let marble = 0
    let lapisLazuli = 0
    let gold = 0
    let height = 0
    let step = 0

    while (baseSize > 2) {
        step += 1
        height += stepHeight
        stone += ((baseSize - 2) ** 2) * stepHeight
        if (step % 5 !== 0) {
            marble += (baseSize * baseSize - ((baseSize - 2) ** 2)) * stepHeight
        } else {
            lapisLazuli += (baseSize * baseSize - ((baseSize - 2) ** 2)) * stepHeight
        }

        baseSize -= 2
    }
    
    gold += (baseSize * baseSize) * stepHeight
    height += stepHeight

    console.log(`Stone required: ${Math.ceil(stone)}`)
    console.log(`Marble required: ${Math.ceil(marble)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`)
    console.log(`Gold required: ${Math.ceil(gold)}`)
    console.log(`Final pyramid height: ${Math.floor(height)}`)
}

buildPyramid(11, 1)
buildPyramid(11, 0.75)
buildPyramid(23, 0.5)