const category = ['eggRoll', 'toast', 'burger'];
const material = {
    'bacon': 35,
    'ham': 30,
    'pork': 40,
    'porkChop': 45,
    'chicken': 40,
    'hashBrownCheese': 50,
    'lemonChicken': 50,
    'smokeChicken': 55,
    'karaChicken': 60,
    'firedFish': 60 
};
const drink = {
    'juice': 25,
    'blackTea': 25,
    'soyMilk': 25,
    'milkTea': 35
};
let price = 0;

class Breakfast{
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

const materialLength = Object.keys(material).length;
const randomDrinkLength = Object.keys(drink).length;
const randomCategoryNum =  Math.floor(Math.random() * category.length);
const randomMaterialNum = Math.floor(Math.random() * materialLength);
const randomDrinkNum = Math.floor(Math.random() * randomDrinkLength);
const order = new Breakfast(category[randomCategoryNum], material[Object.keys(material)[randomMaterialNum]], drink[Object.keys(drink)[randomDrinkNum]]);

console.log(`Category:${order.categoryName}
Material:${Object.keys(material)[randomMaterialNum]}
Mprice: ${order.materialPrice}
Drink: ${Object.keys(drink)[randomDrinkNum]}
Dprice: ${order.drinkPrice}
Total: ${order.total()}`);