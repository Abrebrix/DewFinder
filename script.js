const input = document.querySelector('[data-search]'); // input
const avatar = document.querySelector('[data-img]'); // img
const username = document.querySelector('[data-name]'); // usr
const link = document.querySelector('[data-link]'); // link
const repos = document.querySelector('[data-repositories]'); // repo
const subscribers = document.querySelector('[data-subscribers]'); // sub

input.addEventListener('keydown', async (event) => {
  if (event.key == 'Enter' && input.value.length > 0) {
    try {
      const inputValue = input.value;
      let response = await fetch(`https://api.github.com/users/${inputValue}`);
      if (response.ok) {
        userData = await response.json();

        input.value = '';
        avatar.src = userData.avatar_url;
        username.textContent = userData.login;
        link.href = userData.html_url
        link.textContent = userData.html_url;
        repos.textContent = userData.public_repos;
        subscribers.textContent = userData.followers;
      } else {
        throw new Error('Пользователь не найден')
      }
    } catch (err) {
      console.log(err);
    }
  }
});