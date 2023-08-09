function displayMenu() {
  const responsiveMenu = document.querySelector('.js-nav-menu');

  if (responsiveMenu.classList.contains('responsive-menu-show')) {
    responsiveMenu.classList.remove('responsive-menu-show');
  } else if (responsiveMenu.classList.contains('responsive-menu')) {
    responsiveMenu.classList.add('responsive-menu-show');
  }
}

const storedText = localStorage.getItem('textIn');
document.querySelector('.js-note-paragraph').innerHTML = storedText;

function saveTheText() {
  const textInput = document.querySelector('.js-note-input').value;
  
  document.querySelector('.js-note-paragraph').innerHTML = textInput;

  localStorage.setItem('textIn', textInput);
}

function removeNote() {
  console.log('Do nothing yet');
}

// setItem here. I have to set textInput so when I open the web the variable won't get reset.