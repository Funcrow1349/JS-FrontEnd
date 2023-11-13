function reduceThickness(arr) {
    
    let desiredThickness = arr[0];

    for (i = 1; i < arr.length; i++) {
        let cuts = 0;
        let laps = 0;
        let grinds = 0;
        let etches = 0;
        let xRays = 0;

        let currentThickness = arr[i];

        console.log(`Processing chunk ${currentThickness} microns`);

        while (currentThickness / 4 >= desiredThickness) {
            cuts += 1;
            currentThickness /= 4;
        }

        if (cuts) {
            console.log(`Cut x${cuts}`);
            console.log("Transporting and washing");
            currentThickness = Math.floor(currentThickness);
        }

        while (currentThickness * 0.8 >= desiredThickness) {
            laps += 1;
            currentThickness *= 0.8;
        }

        if (laps) {
            console.log(`Lap x${laps}`);
            console.log("Transporting and washing");
            currentThickness = Math.floor(currentThickness);
        }
        while (currentThickness - 20 >= desiredThickness) {
            grinds += 1;
            currentThickness -= 20;
        }
        if (grinds) {
            console.log(`Grind x${grinds}`);
            console.log("Transporting and washing");
        }

        while (currentThickness - 2 >= desiredThickness - 1) {
            etches += 1;
            currentThickness -= 2;
        }
        if (etches) {
            console.log(`Etch x${etches}`);
            console.log("Transporting and washing");
        }

        if (currentThickness < desiredThickness) {
            xRays += 1;
            currentThickness += 1;
            console.log(`X-ray x${xRays}`);
        }

        console.log(`Finished crystal ${currentThickness} microns`);
  }
}

// reduceThickness([1375, 50000]);
reduceThickness([1000, 4000, 8100])
