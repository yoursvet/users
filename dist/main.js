"use strict";
const users = [
    { id: 1, name: 'Pip Pi', email: 'Pipup.com' },
    { id: 2, name: 'Pukpuk', email: 'Popa.com' },
    { id: 3, name: 'Pukish', email: 'pukishpuk.com' },
];
function renderUser(user) {
    const userDiv = document.createElement('div');
    userDiv.classList.add('user');
    const avatarImg = document.createElement('img');
    avatarImg.src = user.avatar || 'default-avatar.png';
    avatarImg.alt = `${user.name}'s avatar`;
    avatarImg.width = 100;
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.value = user.name;
    nameInput.addEventListener('change', (event) => {
        user.name = event.target.value;
    });
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.value = user.email;
    emailInput.addEventListener('change', (event) => {
        user.email = event.target.value;
    });
    const avatarInput = document.createElement('input');
    avatarInput.type = 'file';
    avatarInput.accept = 'image/*';
    avatarInput.addEventListener('change', (event) => {
        var _a;
        const file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                var _a;
                user.avatar = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                avatarImg.src = user.avatar;
            };
            reader.readAsDataURL(file);
        }
    });
    userDiv.appendChild(avatarImg);
    userDiv.appendChild(nameInput);
    userDiv.appendChild(emailInput);
    userDiv.appendChild(avatarInput);
    return userDiv;
}
function renderUserList(users) {
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = '';
    users.forEach(user => {
        appDiv.appendChild(renderUser(user));
    });
}
renderUserList(users);
