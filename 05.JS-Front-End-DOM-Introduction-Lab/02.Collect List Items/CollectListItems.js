function extractText() {
    const elements = document.getElementsByTagName("li")
    let content = []

    for (const element of Array.from(elements)) {
        content.push(element.textContent)
    }

    const textAreaElement = document.getElementById("result")
    textAreaElement.textContent = content.join("\n")
    
}