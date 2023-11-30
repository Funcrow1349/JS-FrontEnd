function addItem() {
    const inputText = document.getElementById("newItemText")
    const liTag = document.createElement("li")
    liTag.textContent = inputText.value

    const ulElement = document.getElementById("items")
    ulElement.appendChild(liTag)

}