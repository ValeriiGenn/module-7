const titleEl = document.createElement("h1");
titleEl.classList.add("page-title");
titleEl.textContent = "Це заголовок сторінки :)";
//console.log(titleEl);

//створюємо зображення
const imageEl = document.createElement("img");
imageEl.src =
    "https://media.istockphoto.com/photos/landscape-of-kates-point-in-mahabaleshwar-1280-meters-from-sea-level-picture-id1319829481?s=612x612";
imageEl.alt = "valais-alpine-montains-glasier";
imageEl.width = 320;
//console.log("imageEl", imageEl);

//document.body.appendChild(imageEl);
const heroEl = document.querySelector(".hero");
//heroEl.appendChild(titleEl);
//heroEl.appendChild(imageEl); або

heroEl.append(titleEl, imageEl);

//stvoryuemo i dobavljaemo njvui punkt menu
const navItemEl = document.createElement("li");
navItemEl.classList.add("site-nav__item");

const navLinkEl = document.createElement("a");
navLinkEl.classList.add("site-nav__link");
navLinkEl.textContent = "Личный кабинет";
navLinkEl.href = "/profile";

console.log(navItemEl);
console.log(navLinkEl);
//вкладаємо a в li;

navItemEl.appendChild(navLinkEl);
console.log(navItemEl);

const navEl = document.querySelector(".site-nav");
//вкладаємо в ul в кінець списку
//navEl.appendChild(navItemEl);
//після першого li
navEl.insertBefore(navItemEl, navEl.firstElementChild);
//перед останнім
//navEl.insertBefore(navItemEl, navEl.lastElementChild);
//перед другим
//navEl.insertBefore(navItemEl, navEl.children[1]);