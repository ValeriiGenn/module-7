//створюємо карточку продукту
const product = {
    name: "Сервоприводы",
    description: "loren ipsum",
    price: 2000,
    avaliable: true,
    onSale: true,
};

const products = [{
        name: "Сервоприводы",
        description: "loren ipsum",
        price: 2000,
        avaliable: true,
        onSale: true,
    },
    {
        name: "Генератор",
        description: "loren ipsum",
        price: 8000,
        avaliable: true,
        onSale: true,
    },
    {
        name: "Лісапед",
        description: "loren ipsum",
        price: 5000,
        avaliable: true,
        onSale: true,
    },
    {
        name: "Сірий кінь",
        description: "loren ipsum",
        price: 112000,
        avaliable: true,
        onSale: true,
    },
];
console.log(products);
/*<article class="product">
    <h2 class="product__name">Название</h2>
    <p class="product__descr">Описание</p>
    <p class="product__price">Цена :</p>
    </article>
    */
/*const productEl = document.createElement("article");
productEl.classList.add("product");

const nameEl = document.createElement("h2");
nameEl.textContent = product.name;
nameEl.classList.add("product__name");

const descrEl = document.createElement("p");
descrEl.textContent = product.description;
descrEl.classList.add("product__descr");

const priceEl = document.createElement("p");
priceEl.textContent = `Цена : ${product.price} грн.`;
priceEl.classList.add("product__price");*/

/*console.log(productEl);
console.log(nameEl);
console.log(descrEl);
console.log(priceEl);*/

/*productEl.append(nameEl, descrEl, priceEl);

console.log(productEl);*/

//!!!щоб експортувати із js-module потрібно export default[]
//-> тут import products from './data/.....js';
const productsContainerEl = document.querySelector(".js-products");
const makeProductCard = ({ name, description, price }) => {
    const productEl = document.createElement("article");
    productEl.classList.add("product");

    const nameEl = document.createElement("h2");
    nameEl.textContent = name;
    nameEl.classList.add("product__name");

    const descrEl = document.createElement("p");
    descrEl.textContent = description;
    descrEl.classList.add("product__descr");

    const priceEl = document.createElement("p");
    priceEl.textContent = `Цена : ${price} грн.`;
    priceEl.classList.add("product__price");

    productEl.append(nameEl, descrEl, priceEl);

    return productEl;
};

console.log(makeProductCard(product));

const elements = products.map(makeProductCard);
console.log(elements);
productsContainerEl.append(...elements);