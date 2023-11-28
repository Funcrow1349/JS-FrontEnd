function toggle() {
    let buttonText = document.getElementsByClassName("button")[0]
    const content = document.getElementById("extra")

    if (buttonText.textContent === "More") {
        buttonText.textContent = "Less"
        content.style.display = "block"
    } else {
        buttonText.textContent = "More"
        content.style.display = "none"
    }
}