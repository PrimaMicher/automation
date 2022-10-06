// function print () {
//     console.log("Hello everybody!" )
// }
// print();

//====== Function Expresion

// const print = function (){
//     console.log ("Hello everybody!")
// }
// print();


//============================================================

//let num = 10; //якщо оголосити зовнішню змінну, то вивід в консолі буде мінятись на +1, а якщо в середині ф-ції, тоді ні
//function count(){
    // let num =10;
 //   num++
 //   console.log(num);
//}

//count();
//count();
//count();

//===========================================================



// ======================function declaration================

// function sum(num1, num2){
//     return num1 + num2;
// }

// console.log(sum(10,20) + sum(50,30));
//console.log(sum(50,30));

//=============================================================

// function count(num1, num2, operator){
//     switch (operator){
//         case "+":
//             return num1 +num2;
//             break;
//         case "-":
//             return num1-num2;
//             break;
//     }
// }
//
// console.log(count (10,20, "+"));

//===============================================================

// function count(num1, num2, operator){
//     let result;
//     switch (operator){
//         case "+":
//             result = num1 +num2;
//             break;
//         case "-":
//             result = num1-num2;
//             break;
//     }
//     return result;
// }
//
// console.log(count (10,20, "+"));

//===============================================================

// function sum (num1, num2){
//     return num1 + num2;
// }
//
// console.log(count (10));  //якщо не передати один з аргументів, то результат буде NaN
                         //якщо більше написати аргументів, то обрахує лише перші два
                       //коли параметрам присвоєні яксь значення, то це вже наз. аргументом

//===============================================================

//function sum (num1 = 0, num2 = 0){
//     return num1 + num2;
// }
//
// console.log(sum(10));

// ====================== Arguments===============================

// function  sum(){
//     let sum =0;
//     for (let i=0; i<arguments.length; i++){
//         sum += arguments[i];
//     }
//     return sum
// }

//console.log(sum(10, 20, 30, 45, 56, 88));
//або приклад з масивом

// let arr = [10, 20, 30, 40, 50, 60];
        // оператерор spred (...arr) перетворює масив в послідовність чисел

// let result = sum (...arr);
// result += 1000;
// console.log(result);

//================Arrow Function===============================

// function sum (num1, num2){
//     return num1 +num2;
// }
//
// const newSum = (num1, num2) => num1 + num2;
//
// function getPow (num) {
//     return num ** 2;
// }
//
// const newGetPow = num => num ** 2;
//
// console.log(sum (10,20));
// console.log(sum(10, 20));
// console.log(getPow(10));
// console.log(newGetPow(10);
//


//======================== Callback========================

// const  printMessage = function (param) {
//     console.log (`You just entered ${param}`);
// }
// printMessage("Hello");
// console.log (typeof printMessage);
//
// const newMessage = printMessage;
// console.log (typeof newMessage);
//
// printMessage("mariana");
// newMessage("Marianna");


//============================================================

// function sum (num1, num2){
//     return num1 + num2;
// }
//
// console.log (10,20);


function sum (num1, num2){
    return function (){
        return num1 + num2;
    }
}
const newSum = sum (10,20)
console.log (newSum());


