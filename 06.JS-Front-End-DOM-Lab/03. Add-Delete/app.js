function addItem() {
    const inputText = document.getElementById("newItemText")
    const liTag = document.createElement("li")
    liTag.textContent = inputText.value

    deleteButton = document.createElement("a")
    deleteButton.textContent = "[Delete]"
    deleteButton.href = "#"
    deleteButton.addEventListener("click", removeElement)
    liTag.appendChild(deleteButton)

    const ulElement = document.getElementById("items")
    ulElement.appendChild(liTag)

    function removeElement(e) {
        liTag.remove()
    }

}