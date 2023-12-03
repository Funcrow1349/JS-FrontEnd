function solve() {

    let [generateBtn, buyBtn] = document.getElementsByTagName("button")

    generateBtn.addEventListener("click", generateProducts)
    buyBtn.addEventListener("click", createOutput)

    function generateProducts() {
      let inputTextArea = document.getElementsByTagName("textarea")[0]
      let arrayOfProducts = JSON.parse(inputTextArea.value)

      for (const product of arrayOfProducts) {
    
        let newTableRow = document.createElement("tr")
        let tBody = document.getElementsByTagName("tbody")[0]
        tBody.appendChild(newTableRow)

        let newTableImg = document.createElement("img")
        newTableImg.src = product["img"]
        let newTableImgTD = document.createElement("td")
        newTableImgTD.appendChild(newTableImg)
        newTableRow.appendChild(newTableImgTD)

        let newTableNameP = document.createElement("p")
        newTableNameP.textContent = product["name"]
        let newTableNameTD = document.createElement("td")
        newTableNameTD.appendChild(newTableNameP)
        newTableRow.appendChild(newTableNameTD)

        let newTablePriceP = document.createElement("p")
        newTablePriceP.textContent = Number(product["price"])
        let newTablePriceTD = document.createElement("td")
        newTablePriceTD.appendChild(newTablePriceP)
        newTableRow.appendChild(newTablePriceTD)

        let newTableDecorationFactorP = document.createElement("p")
        newTableDecorationFactorP.textContent = Number(product["decFactor"])
        let newTableDecorationTD = document.createElement("td")
        newTableDecorationTD.appendChild(newTableDecorationFactorP)
        newTableRow.appendChild(newTableDecorationTD)

        let newCheckboxInput = document.createElement("input")
        newCheckboxInput.type = "checkbox"
        let newCheckboxTD = document.createElement("td")
        newCheckboxTD.appendChild(newCheckboxInput)
        newTableRow.appendChild(newCheckboxTD)

      }

    }

    function createOutput() {
        let tableRows = Array.from(document.querySelectorAll("tbody tr"))
        let outputTextArea = document.getElementsByTagName("textarea")[1]

        let boughtProducts = []
        let totalPrice = 0
        let decorationFactor = []

       
        for (const row of tableRows) {
          let checkbox = row.children[4].children[0].checked

          if (checkbox) {
            boughtProducts.push(row.children[1].children[0].textContent)
            totalPrice += Number(row.children[2].children[0].textContent)
            decorationFactor.push(Number(row.children[3].children[0].textContent))
          }
        }

        let totalDecorationFactor = 0
        for (const factor of decorationFactor) {
          totalDecorationFactor += factor
        }

        let averageDecorationFactor = totalDecorationFactor / decorationFactor.length

        outputTextArea.value += `Bought furniture: ${boughtProducts.join(", ")}\n`
        outputTextArea.value += `Total price: ${totalPrice.toFixed(2)}\n`
        outputTextArea.value += `Average decoration factor: ${averageDecorationFactor}` 
    }
    
}