function arrayRotation(array, rotations) {
    for (let index = 0; index < rotations; index++) {
        array.push(array.shift())
    }

    console.log(array.join(" "))
}

arrayRotation([51, 47, 32, 61, 21], 2)