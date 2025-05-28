const themeToggle = document.querySelector('#toggle');
const card = document.querySelector('#theme-card');

themeToggle.addEventListener('click', () => {
    if (card.classList.contains('btn-toggle')) {
        card.classList.remove('btn-toggle');
        themeToggle.textContent = "Light Mode";
    } else {
        card.classList.add('btn-toggle');
        themeToggle.textContent = 'Dark Mode';
    }
    }
);