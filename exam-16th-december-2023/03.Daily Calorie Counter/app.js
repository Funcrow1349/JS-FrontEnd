const baseUrl = "http://localhost:3030/jsonstore/tasks/"

const loadMealsBtn = document.getElementById("load-meals")
const mealsListElement = document.getElementById("list")

loadMealsBtn.addEventListener("click", loadMeals)

const addMealBtn = document.getElementById("add-meal")
addMealBtn.addEventListener("click", addNewMeal)

const editMealBtn = document.getElementById("edit-meal")
editMealBtn.addEventListener("click", editMeal)

const foodInputField = document.getElementById("food")
const timeInputField = document.getElementById("time")
const caloriesInputField = document.getElementById("calories")

currentMealId = ""

async function loadMeals() {
    const response = await fetch(baseUrl)
    const mealsInfo = await response.json()

    mealsListElement.innerHTML = ""

    for (const meal of Object.values(mealsInfo)) {
        
        const mealDivElement = document.createElement("div")
        mealDivElement.className = "meal"

        const mealH2Element = document.createElement("h2")
        mealH2Element.textContent = meal.food

        const timeH3Element = document.createElement("h3")
        timeH3Element.textContent = meal.time

        const caloriesH3Element = document.createElement("h3")
        caloriesH3Element.textContent = meal.calories

        const mealButtonsContainer = document.createElement("div")
        mealButtonsContainer.id = "meal-buttons"

        const changeMealBtn = document.createElement("button")
        changeMealBtn.className = "change-meal"
        changeMealBtn.textContent = "Change"

        changeMealBtn.addEventListener("click", async () => {
            
            foodInputField.value = meal.food
            timeInputField.value = meal.time
            caloriesInputField.value = meal.calories
            currentMealId = meal._id

            addMealBtn.setAttribute("disabled", "disabled")
            editMealBtn.removeAttribute("disabled")

            mealsListElement.removeChild(mealDivElement)
        })

        const deleteMealBtn = document.createElement("button")
        deleteMealBtn.className = "delete-meal"
        deleteMealBtn.textContent = "Delete"

        deleteMealBtn.addEventListener("click", async () => {

            currentMealId = meal._id
            
            await fetch(baseUrl + currentMealId, {
                method: "DELETE",
            })

            loadMeals()
        })

        mealButtonsContainer.appendChild(changeMealBtn)
        mealButtonsContainer.appendChild(deleteMealBtn)

        mealDivElement.appendChild(mealH2Element)
        mealDivElement.appendChild(timeH3Element)
        mealDivElement.appendChild(caloriesH3Element)
        mealDivElement.appendChild(mealButtonsContainer)

        mealsListElement.appendChild(mealDivElement)
    }


}

async function addNewMeal() {
    const isValid = foodInputField.value !== "" && timeInputField.value !== "" && caloriesInputField.value !== ""

    if (isValid) {
        const newMealObj = {
            food: foodInputField.value,
            time: timeInputField.value,
            calories: caloriesInputField.value,
        }

        await fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify(newMealObj)
        }) 

        foodInputField.value = ""
        timeInputField.value = ""
        caloriesInputField.value = ""

        loadMeals()  
    }
}

async function editMeal() {
    const editedMealObj = {
        food: foodInputField.value,
        time: timeInputField.value,
        calories: caloriesInputField.value,
        _id: currentMealId
    }

    await fetch(baseUrl + currentMealId, {
        method: "PUT",
        body: JSON.stringify(editedMealObj)
    })

    addMealBtn.removeAttribute("disabled")
    editMealBtn.setAttribute("disabled", "disabled")

    loadMeals()
}