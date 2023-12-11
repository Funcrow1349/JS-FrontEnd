async function solution() {
    const baseUrl = "http://localhost:3030/jsonstore/advanced/articles/list"

    const mainSection = document.getElementById("main")
    const response = await fetch(baseUrl)
    const entries = await response.json()

    for (const entry of Object.values(entries)) {
        createElement(entry)
    }

    function createElement(elementInfo) {
        const newDiv = document.createElement("div")
        newDiv.className = "accordion"
        newDiv.innerHTML = `
            <div class="head">
                <span>${elementInfo.title}</span>
                <button class="button" id="${elementInfo._id}">More</button>
            </div>
            <div class="extra">
                <p>${elementInfo.title} .....</p>
            </div>
        `
        mainSection.appendChild(newDiv)
    }

    const buttons = Array.from(document.getElementsByClassName("button"))

    for (const btn of buttons) {
        btn.addEventListener("click", async () => {
            const id = btn.id

            const response = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${id}`)
            const data = await response.json()

            const divToDisplay = btn.parentNode.parentNode.getElementsByClassName("extra")[0]
            const pToDisplay = divToDisplay.getElementsByTagName("p")[0]
            pToDisplay.textContent = data.content
            
            if (btn.textContent === "More") {
                divToDisplay.style.display = "block"
                btn.textContent = "Less"
            } else {
                divToDisplay.style.display = "none"
                btn.textContent = "More"
            }
        })
    }    
    
}

window.onload = solution()