document.querySelectorAll("li").forEach((el) => {
    //console.log(el.innerText);
    // if (parseInt(el.innerText) % 2) el.remove();
    //непарні
    if (!(parseInt(el.innerText) % 2)) el.remove();
});
document.querySelectorAll("li").forEach((el) => {
    const image = document.createElement("img");

    image.setAttribute(
        "src",
        "https://racurs.ua/content/images/Publication/News/11/66/60/preview_w698zc0.jpg"
    );
    el.innerHTML = "";
    el.appendChild(image);
});