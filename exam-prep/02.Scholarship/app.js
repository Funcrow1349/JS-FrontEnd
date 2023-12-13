window.addEventListener("load", solve);

function solve() {
    const studentInputField = document.getElementById("student")
    const universityInputField = document.getElementById("university")
    const scoreInputField = document.getElementById("score")

    const nextButton = document.getElementById("next-btn")

    const previewList = document.getElementById("preview-list")
    const candidatesList = document.getElementById("candidates-list")

    nextButton.addEventListener("click", addCandidateForPreview)

    function addCandidateForPreview() {
      const isValid = studentInputField.value != "" && universityInputField.value != "" && scoreInputField.value != ""

      if (isValid) {
        const candidateNameElement = document.createElement("h4")
        const candidateUniversityElement = document.createElement("p")
        const candidateScoreElement = document.createElement("p")

        studentName = studentInputField.value
        universityName = universityInputField.value
        score = Number(scoreInputField.value)

        candidateNameElement.textContent = studentName
        candidateUniversityElement.textContent = `University: ${universityName}`
        candidateScoreElement.textContent = `Score: ${score}`

        const articleElement = document.createElement("article")
        articleElement.appendChild(candidateNameElement)
        articleElement.appendChild(candidateUniversityElement)
        articleElement.appendChild(candidateScoreElement)

        const editButtonElement = document.createElement("button")
        const applyButtonElement = document.createElement("button")

        editButtonElement.textContent = "edit"
        applyButtonElement.textContent = "apply"

        editButtonElement.classList.add("action-btn", "edit")
        applyButtonElement.classList.add("action-btn", "apply")

        editButtonElement.addEventListener("click", () => {
          studentInputField.value = studentName
          universityInputField.value = universityName
          scoreInputField.value = score

          nextButton.disabled = false
          previewList.innerHTML = ""
        })

        applyButtonElement.addEventListener("click", () => {
          candidatesList.innerHTML += previewList.innerHTML
          const buttonsToHide = Array.from(candidatesList.getElementsByTagName("button"))
          buttonsToHide.forEach((btn) => btn.style.display = "none")
          
          nextButton.disabled = false
          previewList.innerHTML = ""

        })

        const liElement = document.createElement("li")
        liElement.className = "application"

        liElement.appendChild(articleElement)
        liElement.appendChild(editButtonElement)
        liElement.appendChild(applyButtonElement)

        previewList.appendChild(liElement)

        nextButton.disabled = true
        studentInputField.value = ""
        universityInputField.value = ""
        scoreInputField.value = ""

      }
    } 
  
  }
  