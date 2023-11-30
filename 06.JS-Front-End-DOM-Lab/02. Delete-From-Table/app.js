function deleteByEmail() {
    const deleteQuery = document.querySelector("input[name='email']")
    const result = document.getElementById("result")

    const emails = Array.from(document.querySelectorAll("tbody tr td:nth-child(2)"))

    for (const email of emails) {

        if (email.textContent === deleteQuery.value) {
            row = email.parentNode
            row.parentNode.removeChild(row)
            result.textContent = "Deleted."
        } else {
            result.textContent = "Not found."
        }
    }
}