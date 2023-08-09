function displayMenu() {
  const responsiveMenu = document.querySelector('.js-nav-menu');

  if (responsiveMenu.classList.contains('responsive-menu-show')) {
    responsiveMenu.classList.remove('responsive-menu-show');
  } else if (responsiveMenu.classList.contains('responsive-menu')) {
    responsiveMenu.classList.add('responsive-menu-show');
  }
}