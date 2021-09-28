const elements = document.querySelectorAll("li");

elements.forEach((el) => console.log(el.textContent));
//вивід списка лі в консоль
//добавили coke
const li = document.createElement("li");
li.appendChild(document.createTextNode("Coke"));
const parent = document.querySelector("ul");
parent.insertAdjacentHTML("beforeend", "<li>Coke<li>");
//перефарбували

document.querySelectorAll("li").forEach((el) => (el.style.color = "Red"));

//var t = 123 ;