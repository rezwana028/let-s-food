function addPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => displayPosts(json))
}

addPost()

function displayPosts(posts) {

    const postDiv = document.getElementById('posts');
    // console.log(postDiv);

    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post');

        // console.log(post);

        div.innerHTML =
            `
            <h2> Tittle: ${post.title}</h2>
            <p> ID: ${post.id}</p>
            <p> Post: ${post.body}</p>`

        postDiv.appendChild(div)
        // console.log(div);

    }

}
