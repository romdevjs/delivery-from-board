const burgerBtn = document.getElementById('burger-btn');
const header = document.getElementById('header');
const htmlElement = document.querySelector('html');

burgerBtn.addEventListener('click', () => {
  header.classList.toggle('header_open');
  htmlElement.classList.toggle('disabled');
});

header.addEventListener('click', (e) => {
  e.stopPropagation();
})

htmlElement.addEventListener('click', (e) => {
  if(htmlElement.classList.contains('disabled')){
    header.classList.remove('header_open');
    htmlElement.classList.remove('disabled');
  }
})