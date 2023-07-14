const menuToggle = document.querySelector('.menu-toggle');
const menuUl = document.querySelector('.menu-ul');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  menuUl.classList.toggle('active');
});