function attachEventsListeners() {
    
    const units = {
        "km": 1000,
        "m": 1,
        "cm": 0.01,
        'mm': 0.001,
        "mi": 1609.34,
        "yrd": 0.9144,
        "ft": 0.3048,
        "in": 0.0254,
    }
    
    let convertBtn = document.getElementById("convert")
    convertBtn.addEventListener("click", convertUnits)

    function convertUnits() {
        let inputDistance = document.getElementById("inputDistance")
        let outputDistance = document.getElementById("outputDistance")

        let convertFrom = document.getElementById("inputUnits")
        let convertTo = document.getElementById("outputUnits")

        outputDistance.value = inputDistance.value * units[convertFrom.value] / units[convertTo.value]
    }
}