function focused() {
    const inputElements = Array.from(document.getElementsByTagName("input"))

    for (const element of inputElements) {
        element.addEventListener("focus", addClass)
        element.addEventListener("blur", removeClass)
    }

    function addClass(event) {
        event.currentTarget.parentNode.className = "focused"
    }

    function removeClass(event) {
        event.currentTarget.parentNode.classList.remove("focused")
    }
    
}