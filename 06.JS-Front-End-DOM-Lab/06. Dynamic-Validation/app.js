function validate() {
    let emailInfo = document.getElementById("email")

    emailInfo.addEventListener("change", validateEmail)

    function validateEmail(event) {
        const regex = new RegExp(/[a-z]+@[a-z]+\.[a-z]+/g)

        if (!regex.test(emailInfo.value)) {
            event.currentTarget.className = "error"
        } else {
            event.currentTarget.classList.remove("error")
        }


    }
}