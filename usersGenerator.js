const getUsers = (e) => {
    e.preventDefault();

    const usersNumber = document.querySelector('.users-generator__input').value;
    const usersGender = document.querySelector('.users-generator__select').value;

    const url = `https://randomuser.me/api/?results=${usersNumber}&gender=${usersGender === 'all' ? 'male,female': usersGender}`;

    fetch(url)
        .then(response => {
            if (response.status !== 200) {
                throw new Error(response.status)
            } else {
                return response.json()
            }
        })
        .then(json => showUsers(json.results))
        .catch(err => console.log(err, 'Błąd'))
}

document.querySelector('.users-generator__submit').addEventListener('click', getUsers);

const showUsers = (users) => {

    const resultList = document.querySelector('.user-list');

    users.forEach(user => {
        console.log(user);
        const item = document.createElement('div');
        item.className = 'user';
        item.innerHTML = `
        <div class="user__name">${user.name.title.toUpperCase()} ${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}</div>
        <img class="user__image" src=${user.picture.medium}>
        `

        resultList.appendChild(item);
    })
}