function solve() {
   const addButtons = Array.from(document.querySelectorAll(".add-product"))

   for (const button of addButtons) {
      button.addEventListener("click", addToCart)
   }

   let addedProducts = []
   let textArea = document.getElementsByTagName("textarea")[0]
   let totalMoney = 0

   function addToCart(event) {
      const productName = event.currentTarget.parentNode.parentNode.querySelector(".product-title").textContent

      const productPrice = Number(event.currentTarget.parentNode.parentNode.querySelector(".product-line-price").textContent).toFixed(2)
      textArea.textContent += `Added ${productName} for ${productPrice} to the cart.\n`

      totalMoney += Number(productPrice)

      if (!addedProducts.includes(productName)) {
         addedProducts.push(productName)
      }
      
   }

   document.getElementsByClassName("checkout")[0].addEventListener("click", confirmCheckout)

   function confirmCheckout() {
      for (const button of addButtons) {
         button.disabled = true
      }
      
      document.getElementsByClassName("checkout")[0].disabled = true
      textArea.textContent += `You bought ${addedProducts.join(", ")} for ${totalMoney.toFixed(2)}.`
      
   }
}