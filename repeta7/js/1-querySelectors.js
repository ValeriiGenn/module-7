const magicBtn = document.querySelector(".js-magic-btn");

magicBtn.addEventListener("click", () => {
    const navEl = document.querySelector(".site-nav");
    console.log(navEl);

    const navlinksEl = document.querySelectorAll(".site-nav__link");
    console.log("navlinksEl", navlinksEl);
});