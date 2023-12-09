function attachEvents() {
    const baseUrl = "http://localhost:3030/jsonstore/blog/"

    const loadPostsBtn = document.getElementById("btnLoadPosts")
    const viewPostsBtn = document.getElementById("btnViewPost")

    const postsDropdownMenu = document.getElementById("posts")
    const postTitle = document.getElementById("post-title")
    const postContent = document.getElementById("post-body")

    const commentSection = document.getElementById("post-comments")

    let allPosts = {}
    
    loadPostsBtn.addEventListener("click", loadPosts)

    async function loadPosts() {

        postsDropdownMenu.innerHTML = ""

        const response = await fetch(baseUrl + "posts")
        allPosts = await response.json()
        
        for (const [postId, postObj] of Object.entries(allPosts)) {
            const option = document.createElement("option")

            option.value = postId
            option.textContent = postObj.title

            postsDropdownMenu.appendChild(option)
        }
        
    }

    viewPostsBtn.addEventListener("click", viewPost)

    async function viewPost() {

        const postId = postsDropdownMenu.value
        postTitle.textContent = allPosts[postId].title
        postContent.textContent = allPosts[postId].body

        const response = await fetch(baseUrl + "comments")
        const commentsInfo = await response.json()

        const filteredComments = Object.values(commentsInfo).filter(e => e.postId === postId)

        commentSection.innerHTML = ""

        for (const comment of filteredComments) {
            const newLi = document.createElement("li")
            newLi.textContent = comment.text
            commentSection.appendChild(newLi)
        }


    }
}

attachEvents();