/*let task = "Make cup of coffee";
let step1 = "1. Choose a cup";
let step2 = "2. Put 1 spoon of coffee";
let step3 = "3. Pour water in a cup with coffee";
let step4 = "4. Choose with milk or without";
let result = "Your coffee is ready!"

document.write(task, "<br>", step1, "<br>", step2,"<br>", step3, "<br>", step4, "<br>","<br>", result);*/


let cupSize
let smallCup = "small cup";
let mediumCup = "medium cup";
let largeCup = "large cup";
let ingredient
let water = "water";
let milk = "milk";
let ice = "ice";
let price = 5;
let coffeeType
let americano = "Americano";
let espresso = "Espresso";
let iceCoffee = "Ice Coffee";

coffeeType=espresso
cupSize=mediumCup

if (coffeeType == americano){
    ingredient=milk
} else if(coffeeType==espresso){
    ingredient=water
}
if (cupSize==mediumCup) {
    price *= 1.5
} else if (cupSize==largeCup) {
    price *=2
};

let order = `You choose ${coffeeType}!`;
let step1 = `1. Take a ${cupSize}`;
let step2 = "2. Put 1 spoon coffee in it";
let step3 = `3. Pour additional ${ingredient}`;
let step4 = "4. Stir coffee in a cup with a spoon";
let orderPrice = `The order price is ${price}`;
let result = "Have a good time with your coffee!";

document.write(order,"<br>",step1, "<br>",step2,"<br>",step3,"<br>",step4,"<br>","<br>",orderPrice,"<br>",result);