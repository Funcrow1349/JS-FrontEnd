function loadRepos() {
	const username = document.getElementById("username")

	fetch(`https://api.github.com/users/testnakov/repos + "/" + ${username}`)
	.then((result) => result.json())
	
}