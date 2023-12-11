async function lockedProfile() {
    const baseUrl = "http://localhost:3030/jsonstore/advanced/profiles"

    const main = document.getElementById("main")
    main.innerHTML = ""
    main.id = "main"

    const response = await fetch(baseUrl)
    const profileCards = await response.json()

    let userNr = 1

    for (const profileInfo of Object.values(profileCards)) {
        createCard(profileInfo, userNr)
        userNr ++
    }

    function createCard(profile, userNr) {
        const newCard = document.createElement("div")
        newCard.className = "profile"
        newCard.innerHTML = 
        `
	        <img src="./iconProfile2.png" class="userIcon">
	        <label>Lock</label>
	        <input type="radio" name="user${userNr}Locked" value="lock" checked>
	        <label>Unlock</label>
	        <input type="radio" name="user${userNr}Locked" value="unlock"><br>
            <hr>
	        <label>Username</label>
	        <input type="text" name="user${userNr}Username" value="${profile.username}" disabled="" readonly="">
	        <div class="user${userNr}Username">
		        <hr>
		        <label>Email:</label>
		        <input type="email" name="user${userNr}Email" value="${profile.email}" disabled="" readonly="">
		        <label>Age:</label>
		        <input type="email" name="user${userNr}Age" value="${profile.age}" disabled="" readonly="">
	        </div>
            
        `
        newCard.querySelector(`.user${userNr}Username`).style.display = "none"

        const showMoreBtn = document.createElement("button")
        showMoreBtn.textContent = "Show more"
        
        showMoreBtn.addEventListener("click", () => {

            let parentElement = showMoreBtn.parentNode
            let infoToShowHide = parentElement.querySelector(`.user${userNr}Username`)
            const unlocked = Array.from(parentElement.children)[4].checked

            if (unlocked) {
                if (showMoreBtn.textContent === "Show more") {
                    infoToShowHide.style.display = "block"
                    showMoreBtn.textContent = "Hide it"
                } else if (showMoreBtn.textContent === "Hide it") {
                    infoToShowHide.style.display = "none"
                    showMoreBtn.textContent = "Show more"
            }
        }
        })

        newCard.appendChild(showMoreBtn)
        main.appendChild(newCard)

    }  
}


