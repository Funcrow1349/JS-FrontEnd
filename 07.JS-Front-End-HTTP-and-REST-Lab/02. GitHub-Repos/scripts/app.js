function loadRepos() {
   let divElement = document.getElementById("res")

   fetch("https://api.github.com/users/testnakov/repos")
   .then((result) => result.text())
   .then((data) => divElement.textContent = data)
}