function solve() {
    const baseUrl = ("http://localhost:3030/jsonstore/tasks/")

    const loadVacationsBtn = document.getElementById("load-vacations")
    const vacationListDiv = document.getElementById("list")

    const nameInputField = document.getElementById("name")
    const daysInputField = document.getElementById("num-days")
    const dateInputField = document.getElementById("from-date")
    const addVacationBtn = document.getElementById("add-vacation")
    const editVacationBtn = document.getElementById("edit-vacation")

    let currentEntryId = ""

    loadVacationsBtn.addEventListener("click", loadVacations)
    addVacationBtn.addEventListener("click", addVacation)
    editVacationBtn.addEventListener("click", editVacation)

    async function loadVacations() {
        const response = await fetch(baseUrl)
        const vacationsData = await response.json()

        vacationListDiv.innerHTML = ""
        
        for (const vacationInfo of Object.values(vacationsData)) {

            const vacationNameHeading = document.createElement("h2")
            vacationNameHeading.textContent = vacationInfo.name
            const vacationDateHeading = document.createElement("h3")
            vacationDateHeading.textContent = vacationInfo.date
            const vacationDaysHeading = document.createElement("h3")
            vacationDaysHeading.textContent = vacationInfo.days

            const changeBtnElement = document.createElement("button")
            changeBtnElement.className = "change-btn"
            changeBtnElement.textContent = "Change"

            const doneBtnElement = document.createElement("button")
            doneBtnElement.className = "done-btn"
            doneBtnElement.textContent = "Done"

            const containerElement = document.createElement("div")
            containerElement.className = "container"
            containerElement.appendChild(vacationNameHeading)
            containerElement.appendChild(vacationDateHeading)
            containerElement.appendChild(vacationDaysHeading)
            containerElement.appendChild(changeBtnElement)
            containerElement.appendChild(doneBtnElement)

            vacationListDiv.appendChild(containerElement)

            changeBtnElement.addEventListener("click", (btn) => {
                btn.preventDefault()

                nameInputField.value = vacationInfo.name
                daysInputField.value = vacationInfo.days
                dateInputField.value = vacationInfo.date
                currentEntryId = vacationInfo._id

                addVacationBtn.disabled = true
                editVacationBtn.disabled = false

                vacationListDiv.removeChild(containerElement)
            })

            doneBtnElement.addEventListener("click", async (btn) => {
                btn.preventDefault()
                
                currentEntryId = vacationInfo._id

                await fetch(baseUrl + currentEntryId, {
                    method: "DELETE"
                })

                loadVacations()
                
            })
        }
        
        console.log(vacationsData)
    }

    async function addVacation(btn) {
        btn.preventDefault()

        const isValid = nameInputField.value != "" && daysInputField.value != "" && dateInputField.value != ""

        if (isValid) {
            const newVacation = {
                name: nameInputField.value,
                days: daysInputField.value,
                date: dateInputField.value,
            }

            await fetch(baseUrl, {
                method: "POST",
                body: JSON.stringify(newVacation)
            })

            nameInputField.value = ""
            daysInputField.value = ""
            dateInputField.value = ""

            loadVacations()
        }
    }

    async function editVacation(btn) {
        btn.preventDefault()

        const isValid = nameInputField.value != "" && daysInputField.value != "" && dateInputField.value != ""

        if (isValid) {
            
            const name = nameInputField.value
            const days = daysInputField.value
            const date = dateInputField.value
            const _id = currentEntryId

            const editedObject = {
                name,
                days,
                date,
                _id,
            }

            await fetch(baseUrl + currentEntryId, {
                method: "PUT",
                body: JSON.stringify(editedObject)
            })

            addVacationBtn.disabled = false
            editVacationBtn.disabled = true

            nameInputField.value = ""
            daysInputField.value = ""
            dateInputField.value = ""

            loadVacations()
        }
    }
}

solve()