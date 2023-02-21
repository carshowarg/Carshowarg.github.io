//error menu
//preguntas y menu 

const toggleMenuElement = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('main-menu');
const containerCard = document.getElementById('BuenosAires');
const containerCard2 = document.getElementById('Cordoba');
 

toggleMenuElement.addEventListener('click', () => {
  mainMenuElement.classList.toggle('main-menu--show');
  containerCard.classList.toggle('container-cards--show');
  containerCard2.classList.toggle('container-cards--show');

});

const toggleinfo1Element = document.getElementById('toggle-info1');
const info1Element = document.getElementById('info1');

toggleinfo1Element.addEventListener('click', () => {
  info1Element.classList.toggle('info1--show');
});

const toggleinfo2Element = document.getElementById('toggle-info2');
const info2Element = document.getElementById('info2');

toggleinfo2Element.addEventListener('click', () => {
  info2Element.classList.toggle('info2--show');
});

const toggleinfo3Element = document.getElementById('toggle-info3');
const info3Element = document.getElementById('info3');

toggleinfo3Element.addEventListener('click', () => {
  info3Element.classList.toggle('info3--show');
});




