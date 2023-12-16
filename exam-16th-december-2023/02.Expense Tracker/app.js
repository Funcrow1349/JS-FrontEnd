window.addEventListener("load", solve);

function solve() {
    const addButton = document.getElementById("add-btn")

    const expenseTypeInput = document.getElementById("expense")
    const amountInput = document.getElementById("amount")
    const dateInput = document.getElementById("date")

    const previewListElement = document.getElementById("preview-list")
    const expensesListElement = document.getElementById("expenses-list")

    const deleteBtn = document.querySelector(".delete")

    deleteBtn.addEventListener("click", () => {
        location.reload()
    })

    addButton.addEventListener("click", addPreview)

    

    function checkValidInput (expense, amount, date) {
        return expense.value !== "" && amount.value !== "" && date.value !== ""
    }

    function addPreview() {
        if (checkValidInput(expenseTypeInput, amountInput, dateInput)) {

            const expense = expenseTypeInput.value
            const amount = amountInput.value
            const date = dateInput.value

            const newLi = document.createElement("li")
            newLi.className = "expense-item"

            const articleElement = document.createElement("article")

            const typeParagraphElement = document.createElement("p")
            typeParagraphElement.textContent = `Type: ${expense}`
            const amountParagraphElement = document.createElement("p")
            amountParagraphElement.textContent = `Amount: ${amount}$`
            const dateParagraphElement = document.createElement("p")
            dateParagraphElement.textContent = `Date: ${date}`

            articleElement.appendChild(typeParagraphElement)
            articleElement.appendChild(amountParagraphElement)
            articleElement.appendChild(dateParagraphElement)

            const buttonsContainer = document.createElement("div")
            buttonsContainer.className = "buttons"

            const editBtn = document.createElement("button")
            editBtn.classList.add("btn", "edit")
            editBtn.textContent = "edit"

            editBtn.addEventListener("click", () => {
                expenseTypeInput.value = expense
                amountInput.value = amount
                dateInput.value = date

                previewListElement.removeChild(newLi)
                addButton.disabled = false
            })

            const okBtn = document.createElement("button")
            okBtn.classList.add("btn", "ok")
            okBtn.textContent = "ok"

            okBtn.addEventListener("click", () => {
                newLi.removeChild(buttonsContainer)
                
                previewListElement.removeChild(newLi)
                expensesListElement.appendChild(newLi)

                addButton.disabled = false
            }) 

            buttonsContainer.appendChild(editBtn)
            buttonsContainer.appendChild(okBtn)

            newLi.appendChild(articleElement)
            newLi.appendChild(buttonsContainer)
            
            previewListElement.appendChild(newLi)

            expenseTypeInput.value = ""
            amountInput.value = ""
            dateInput.value = ""
            
            addButton.disabled = true

        }
    }

}