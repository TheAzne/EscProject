

const btn1 = document.querySelector('#button1'),
const btn2 = document.querySelector('#button2'),
const menu = document.querySelector('#nav');

menu.style.display = 'none';

btn1.addEventListener('click', (evt) => {menu.style.display = 'block';});
btn2.addEventListener('click', (evt) => {menu.style.display = 'none';});