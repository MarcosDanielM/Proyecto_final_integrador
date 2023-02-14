//Display about

const toggleBtn = document.querySelector('#toggleBtn');
const text = document.querySelector('#text');

toggleBtn.addEventListener('click', () => {
  if (text.style.display === 'block') {
    text.style.display = 'none';
  } else {
    text.style.display = 'block';
  }
});


//formulario de contacto

const openFormBtn = document.querySelector('#openFormBtn');
const myForm = document.querySelector('#myForm');
const contact = document.querySelector('#contact');

openFormBtn.addEventListener('click', () => {
  if (myForm.style.display === 'none') {
    myForm.style.display = 'block';
    openFormBtn.style.display = 'none';
  } else {
    myForm.style.display = 'none';
  }
});


contact.addEventListener('click', () => {
  if (myForm.style.display === 'block') {
    myForm.style.display = 'none';
    openFormBtn.style.display = 'block';
  } else {
    myForm.style.display = 'block';
  }
});