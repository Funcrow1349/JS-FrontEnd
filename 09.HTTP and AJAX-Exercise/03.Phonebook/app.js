function attachEvents() {
    const baseUrl = "http://localhost:3030/jsonstore/phonebook/"

    const loadBtn = document.getElementById("btnLoad")
    const createBtn = document.getElementById("btnCreate")

    const phonebookUl = document.getElementById("phonebook")

    loadBtn.addEventListener("click", loadPhones)
    createBtn.addEventListener("click", createContact)

    async function loadPhones() {
        const response = await fetch(baseUrl)
        const contacts = await response.json()

        for (const contactInfo of Object.values(contacts)) {
            const newLi = document.createElement("li")
            const delBtn = document.createElement("button")
            delBtn.textContent = "Delete"

            newLi.textContent = `${contactInfo.person}: ${contactInfo.phone}`
            newLi.appendChild(delBtn)
            phonebookUl.appendChild(newLi)

            delBtn.addEventListener("click", deleteElement)

            function deleteElement() {
                const id = contactInfo._id

                fetch(baseUrl + id, {
                    method: "DELETE",
                })

                newLi.remove()
            }

        }
    }

    async function createContact() {

        const personInput = document.getElementById("person")
        const phoneInput = document.getElementById("phone")

        let newContact = {
            person: personInput.value,
            phone: phoneInput.value,
        }

        fetch(baseUrl, {
            method: "POST", 
            body: JSON.stringify(newContact)
        })
        .then((response) => response.json())
        .then(() => {
            personInput.value = ""
            phoneInput.value = ""
            phonebookUl.innerHTML = ""

            loadPhones()
        })

        
    }
}

attachEvents();