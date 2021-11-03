/* Open */
//function openNav() {
 // document.getElementById("myNav").style.width = "100%";
//}

//function closeNav() {
 // document.getElementById("myNav").style.width = "0%";
//}

 const buttons = document.querySelectorAll(`button`),
 menu = document.querySelector(`menu`);

menu.style.display = `none`;

buttons[0].addEventListener(`click`, (evt) => menu.style.display = `block`);
buttons[1].addEventListener(`click`, (evt) => menu.style.display = `none`);
