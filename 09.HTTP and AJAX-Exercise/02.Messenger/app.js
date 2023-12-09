function attachEvents() {
    const baseUrl = "http://localhost:3030/jsonstore/messenger"

    const textArea = document.getElementById("messages")
    const authorInfo = document.querySelector("input[name=author]")
    const textInfo = document.querySelector("input[name=content]")

    const sendBtn = document.getElementById("submit")
    const refreshBtn = document.getElementById("refresh")

    sendBtn.addEventListener("click", createPost)
    refreshBtn.addEventListener("click", displayPosts)

    async function createPost() {
        const messageInfo = {
            author: authorInfo.value, 
            content: textInfo.value,
        }

        const isValid = authorInfo.value !== "" && textInfo.value !== ""

        if (isValid) {
            await fetch(baseUrl, {
                method: "POST",
                body: JSON.stringify(messageInfo)
            })
    
            authorInfo.value = ""
            textInfo.value = ""
        }
    }

    async function displayPosts() {
        const messagesToDisplay = []

        const response = await fetch(baseUrl)
        const messages = await response.json()

        for (const messageInfo of Object.values(messages)) {
            messagesToDisplay.push(`${messageInfo.author}: ${messageInfo.content}`)
        }

        textArea.textContent = messagesToDisplay.join("\n")
    }
}

attachEvents();