function usersApi() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => displayInfo(json))


}

usersApi()

function displayInfo(users) {

    const userDiv = document.getElementById('users');
    // console.log(userDiv);

    for (const user of users) {

        const div = document.createElement('div');
        div.classList.add('user');
        div.innerHTML = `
            <h2>${user.name}</h2>
            <p>${user.email}</p>
            <span>${user.phone}</span>
            <p>${user.username}</p> 
        `

        userDiv.appendChild(div)
        // console.log(div)





    }

}


