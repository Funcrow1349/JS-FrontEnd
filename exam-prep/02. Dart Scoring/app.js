window.addEventListener("load", solve);

function solve() {
    const addButton = document.getElementById("add-btn")

    const playerNameInput = document.getElementById("player")
    const scoreInput = document.getElementById("score")
    const roundInput = document.getElementById("round")

    const sureList = document.getElementById("sure-list")
    const scoreboardList = document.getElementById("scoreboard-list")

    const clearBtn = document.getElementsByClassName("btn clear")[0]
    clearBtn.addEventListener("click", solve)

    addButton.addEventListener("click", () => {
      const playerName = playerNameInput.value
      const score = scoreInput.value
      const round = roundInput.value

      if (playerName !== "" && score !== "" && round !== "") {
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

        editBtnElement.addEventListener("click", () => {
          sureList.removeChild(newLiElement)
          playerNameInput.value = playerName
          scoreInput.value = score
          roundInput.value = round

          addButton.removeAttribute("disabled")
        })
  
        const okBtnElement = document.createElement("button")
        okBtnElement.textContent = "ok"
        okBtnElement.classList.add("btn", "ok")

        okBtnElement.addEventListener("click", () => {
          newLiElement.removeChild(editBtnElement)
          newLiElement.removeChild(okBtnElement)
          sureList.removeChild(newLiElement)
          scoreboardList.appendChild(newLiElement)

          addButton.removeAttribute("disabled")

        })
  
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
  