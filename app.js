const buttons = document.querySelectorAll(`button`),
  menu = document.querySelector(`menu`);

menu.style.display = `none`;

buttons[0].addEventListener(`click`, (evt) => (menu.style.display = `block`));
buttons[1].addEventListener(`click`, (evt) => (menu.style.display = `none`));
