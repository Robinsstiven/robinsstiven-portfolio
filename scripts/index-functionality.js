function displayMenu() {
  const responsiveMenu = document.querySelector('.js-nav-menu');

  if (responsiveMenu.classList.contains('responsive-menu-show')) {
    responsiveMenu.classList.remove('responsive-menu-show');
  } else if (responsiveMenu.classList.contains('responsive-menu')) {
    responsiveMenu.classList.add('responsive-menu-show');
  }
}

const aboutSectionButton = document.querySelector('.js-about-button');
const aboutSection = document.querySelector('.js-about-section');

aboutSectionButton.addEventListener('click', () => {
  aboutSection.scrollIntoView({behavior: 'smooth'});
});

const text = 'Robins portfolio';
console.log(btoa(text));

const goToTopButton = document.querySelector('.js-goto-the-top');


goToTopButton.addEventListener('click', () => {
  window.scrollTo ({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 140) {
    goToTopButton.style.display = 'block';
  } else {
    goToTopButton.style.display = 'none';
  }
});