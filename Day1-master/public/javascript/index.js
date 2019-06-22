const category = ['eggRoll', 'toast', 'burger'];
const material = {
    'bacon': 35,
    'ham': 30,
    'pork': 40,
    'porkChop': 45,
    'chicken': 40,
    'hashBrownCheese': 50,
    'lemonChicken': 50,
    'smokedChicken': 55,
    'karaChicken': 60,
    'firedFish': 60
};
const drink = {
    'juice': 25,
    'blackTea': 25,
    'soyMilk': 25,
    'milkTea': 35
};
class Breakfast {
    constructor(categoryName, materialPrice, drinkPrice) {
        this.categoryName = categoryName;
        this.materialPrice = materialPrice;
        this.drinkPrice = drinkPrice;
        if (categoryName === 'burger') {
            this.materialPrice += 5
        }
        price += (this.materialPrice + this.drinkPrice);
    }
    total() {
        return price;
    }
}

let price = 0;
let layer = 0;
const materialLength = Object.keys(material).length;
const randomDrinkLength = Object.keys(drink).length;
const randomCategoryNum = Math.floor(Math.random() * category.length);
const randomMaterialNum = Math.floor(Math.random() * materialLength);
const randomDrinkNum = Math.floor(Math.random() * randomDrinkLength);
const order = new Breakfast(category[randomCategoryNum], material[Object.keys(material)[randomMaterialNum]], drink[Object.keys(drink)[randomDrinkNum]]);

///plus egg
if (randomMaterialNum % 2 === 1) {
    layer += 1;
}

switch (order.categoryName) {
    case 'toast':
    case 'burger':
        layer += 3
        break;
    case 'eggRoll':
        layer = 2;
        break;
    default:
        layer = 1;
}

console.log(`Category:${order.categoryName}
Material:${Object.keys(material)[randomMaterialNum]}
M_price: ${order.materialPrice}
Drink: ${Object.keys(drink)[randomDrinkNum]}
D_price: ${order.drinkPrice}
Total: ${order.total()}
Layer: ${layer}`
);

let boxArray = ['box1', 'box2', 'box3'];
const main = document.querySelector('.main');
let i, text, perHeight;

i = 0, perHeight = 500 / layer;
for (i = 0; i < layer; i++) {
    boxArray[i] = document.createElement("div");
    //boxArray[i].setAttribute('style', `background-color: ${color[i]}`);
    boxArray[i].style.height = `${perHeight}px`;
    boxArray[i].style.backgroundRepeat = 'no-repeat';
    boxArray[i].style.backgroundPosition = 'center';
    // text = document.createTextNode(`box${i}`);
    // boxArray[i].appendChild(text);
    main.appendChild(boxArray[i]);
}

for (i = 0; i < layer; i++) {
    if (i === (layer - 1) || i === 0 && layer != 2) {
        boxArray[i].style.backgroundSize = '95% 100%';
        //burger
        if (order.categoryName === 'burger') {
            //burger-top-image
            boxArray[i].style.backgroundImage = 'url("./public/images/burger-top.png")';
            //burger-bottom-image
            if (i === (layer - 1)) {
                boxArray[i].style.backgroundImage = 'url("./public/images/burger-bottom.png")';
            }
        }
        //toast-image
        else if (order.categoryName === 'toast') {
            boxArray[i].style.backgroundImage = 'url("./public/images/toast.png")';
        }
        //eggRoll-image
        else {
            boxArray[i].style.backgroundImage = 'url("./public/images/eggRoll.png")';
        }
    }
    else {
        boxArray[i].style.backgroundImage =
            `url(./public/images/${Object.keys(material)[randomMaterialNum]}.png)`;
        boxArray[i].style.backgroundSize = '75% 90%';
        if (Object.keys(material)[randomMaterialNum] === 'firedFish' 
        ) {
            console.log(Object.keys(material)[randomMaterialNum]);
            boxArray[i].style.backgroundImage = `url(./public/images/friedFish.png)`;
            boxArray[i].style.backgroundSize = '65% 55%';
        }
        if (i === layer - 2 && layer % 2 === 0 && layer != 2) {
            boxArray[i].style.backgroundImage = 'url("./public/images/egg.png")';
        }
        //fiedFish-image-fix
    }
}



