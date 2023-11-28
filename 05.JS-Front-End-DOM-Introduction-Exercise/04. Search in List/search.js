function search() {
   const listContent = Array.from(document.getElementsByTagName("li"))
   const searchedText = document.getElementById("searchText").value
   let result = document.getElementById("result")
   let matches = 0

   for (const element of listContent) {
      element.style.textDecoration = "none"
      element.style.fontWeight = ""
   }

   for (const element of listContent) {
      if (element.textContent.includes(searchedText)) {
         element.style.textDecoration = "underline"
         element.style.fontWeight = "bold"
         matches += 1
      }
   }

   result.textContent = `${matches} matches found`

}
