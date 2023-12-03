function lockedProfile() {
    let buttons = Array.from(document.getElementsByTagName("button"))

    for (const button of buttons) {
        button.addEventListener("click", showMore)
    }

    function showMore(event) {
        let btn = event.target
        let profile = btn.parentElement
        let children = Array.from(profile.children)

        let unlocked = children[4]
        let infoToDisplay = children[9]

        if (!unlocked.checked) {
            return
        }

        if (btn.textContent === "Show more") {
            infoToDisplay.style.display = "block"
            btn.textContent = "Hide it"
        } else if (btn.textContent === "Hide it") {
            infoToDisplay.style.display = "none"
            btn.textContent = "Show more"
        }
    }

}