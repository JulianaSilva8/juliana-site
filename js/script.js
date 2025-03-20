// Dark Mode
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('modo-escuro');
});

// Perfil photo alert
const fotoPerfil = document.querySelector('.foto-perfil');
fotoPerfil.addEventListener('click', () => {
    alert('Olá! Sou a Juliana 👋');
});
