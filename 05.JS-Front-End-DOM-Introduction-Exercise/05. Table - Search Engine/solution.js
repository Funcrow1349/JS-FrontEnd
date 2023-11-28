function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick)
   const tableContent = Array.from(document.querySelectorAll("tbody tr"))
   const searchedContent = document.getElementById("searchField")

   function onClick() {
      
      
      for (const tableRow of tableContent) {
         if (searchedContent.value !== "" && tableRow.innerHTML.includes(searchedContent.value)) {
            tableRow.className = "select"
         } else {
            tableRow.className = ""
         }
      }

   }
}