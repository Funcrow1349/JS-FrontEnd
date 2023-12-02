function attachEventsListeners() {
    const days = document.getElementById("days")
    const hours = document.getElementById("hours")
    const minutes = document.getElementById("minutes")
    const seconds = document.getElementById("seconds")

    const daysButton = document.getElementById("daysBtn")
    const hoursButton = document.getElementById("hoursBtn")
    const minutesButton = document.getElementById("minutesBtn")
    const secondsButton = document.getElementById("secondsBtn")

    daysButton.addEventListener("click", convertDays)
    hoursButton.addEventListener("click", convertHours)
    minutesButton.addEventListener("click", convertMinutes)
    secondsButton.addEventListener("click", convertSeconds)

    function convertDays() {
        hours.value = days.value * 24
        minutes.value = hours.value * 60
        seconds.value = minutes.value * 60
    }
    function convertHours() {
        days.value = hours.value / 24
        minutes.value = hours.value * 60
        seconds.value = minutes.value * 60
    }
    function convertMinutes() {
        hours.value = minutes.value / 60
        days.value = hours.value / 24
        seconds.value = minutes.value * 60
    }
    function convertSeconds() {
        minutes.value = seconds.value / 60
        hours.value = minutes.value / 60
        days.value = hours.value / 24
    }
}