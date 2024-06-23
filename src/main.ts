interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
  }
  
const users: User[] = [
    { id: 1, name: 'Pip Pi', email: 'Pipup.com' },
    { id: 2, name: 'Pukpuk', email: 'Popa.com' },
    { id: 3, name: 'Pukish', email: 'pukishpuk.com' },
  ];
  
  function renderUser(user: User): HTMLElement {
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
      user.name = (event.target as HTMLInputElement).value;
    });
  
const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.value = user.email;
    emailInput.addEventListener('change', (event) => {
      user.email = (event.target as HTMLInputElement).value;
    });
  
const avatarInput = document.createElement('input');
    avatarInput.type = 'file';
    avatarInput.accept = 'image/*';
    avatarInput.addEventListener('change', (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          user.avatar = e.target?.result as string;
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
  
  function renderUserList(users: User[]) {
    const appDiv = document.getElementById('app')!;
    appDiv.innerHTML = '';
  
    users.forEach(user => {
      appDiv.appendChild(renderUser(user));
    });
  }
  
  renderUserList(users);
  