window.addEventListener("load", solve);

function solve() {
    const addButton = document.getElementById("add-btn")

    const playerNameInput = document.getElementById("player")
    const scoreInput = document.getElementById("score")
    const roundInput = document.getElementById("round")

    const sureList = document.getElementById("sure-list")

    addButton.addEventListener("click", () => {
      if (playerNameInput.value !== "" && scoreInput.value !== "" && roundInput.value !== "") {
        const nameParagraphElement = document.createElement("p")
        nameParagraphElement.textContent = playerNameInput.value
        const scoreParagraphElement = document.createElement("p")
        scoreParagraphElement.textContent = `Score: ${scoreInput.value}`
        const roundParagraphElement = document.createElement("p")
        roundParagraphElement.textContent = `Round: ${roundInput.value}`
  
        const articleElement = document.createElement("article")
  
        const editBtnElement = document.createElement("button")
        editBtnElement.textContent = "edit"
        editBtnElement.classList.add("btn", "edit")
  
        const okBtnElement = document.createElement("button")
        okBtnElement.textContent = "ok"
        okBtnElement.classList.add("btn", "ok")
  
        const newLiElement = document.createElement("li")
        newLiElement.className = "dart-item"
  
        articleElement.appendChild(nameParagraphElement)
        articleElement.appendChild(scoreParagraphElement)
        articleElement.appendChild(roundParagraphElement)
  
        newLiElement.appendChild(articleElement)
        newLiElement.appendChild(editBtnElement)
        newLiElement.appendChild(okBtnElement)
  
        sureList.appendChild(newLiElement)

        addButton.setAttribute("disabled", "disabled")

        playerNameInput.value = ""
        scoreInput.value = ""
        roundInput.value = ""

      }    

    })
  }
  