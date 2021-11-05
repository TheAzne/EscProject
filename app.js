

const btn1 = document.querySelector('#button1'),
    btn2 = document.querySelector('#button2'),
    menu = document.querySelector('#nav');

menu.style.display = 'none';


btn1.addEventListener('click', (evt) => {menu.style.display = 'block';});
btn2.addEventListener('click', (evt) => {menu.style.display = 'none';});