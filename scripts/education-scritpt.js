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