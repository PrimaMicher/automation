// Створення масивів

// let arr = [];
// const arr1 = [1, 2, 3,] //кома після 3 не впливає на роботу масиву, але може полегшити його розширення
// console.log(arr1.length);

//стоверення масива через конструктор

// let arr2 = new Array(10) // let arr = [], 10 об'єкти undefined або зразу його можна наповнити
// console.log(arr2);

//  довжина це властивість масиву, тому вказуючи конкретну довжину масиву існуюсий масив можна безповоротно
// обрізати або обнулити

//let arr1 = [1, 2, 3, 5, 18]
//arr1.length = 3;
// console.log(arr1);
// console.log(arr1[0]) //звернення до індексу конкретного елементу
//console.log (arr1.at(-1)) // звернення до останнього елементу(не індексу) в масиві

// === pop(), push()
// запушити можна багато елементів одночасно, але методом рор видалитит лише останній, навіть якщо
// в дужках вказати неіснуючий в даному масиві індекс, все одно видалить останній
// let arr1 = [1, 2, 3, 5, 18, [52,67, 88]]
// console.log (arr1[5].pop()) // идаляє з вложеного масиву, повертає видалений елемент
// console.log(arr1)

// ===shift(), unshift()
// shift() ==> видалення з початку 1 елемент
// unshift() ==> добавляння в початок масиву
// різниця між pop(), push() та shift(), unshift(), те що 2-га пара працює набагато повільніше при великих масивах

// ======    .concat
// let arr = ['string', 10, 15 , true, [5, 8, 12]];
// let arr1 = [1, 2, 3, 5, 18,];
// let arrStr = ['we', 'are', 'the', 'chapions'];

// console.log(arrStr.concat(arr,arr1))

// =====     reverse() перевертання масива, та зразу його переприсвоєння
// let arr = [1, 2, 3, 5, 18,];
// arr.reverse();
// console.log(arr);


// ========= .split(separator)

// let str = 'Hello world!';
//
// const arr = str.split('l'); // якщо ('')
// console.log(arr)


// ======= .forEach() ============
// не видозмінює масив
// const arr = [-1, -5, -25, -8, 0, -4]

// arr.forEach((el, i, arr) => i % 2 != 0 ? console.log ((el ** 2) + arr.length) : console.log("*"));



// ======== .sort()
// масив міняється, до початкового втрачається доступ

//const arr = ['Anna', 'Steve', 'Jane', 'Serg'];

//console.log(arr.sort())
//console.log(arr.sort().reverse())
//========================================
// const arr = ['Anna', 'Steve', 'Jane', 'Serg'];
// const arrNum = [1, 25, 45, 51, 86, 2, 17]
// console.log(arrNum.sort())
// console.log(arrNum.sort((a,b) => a - b)); // сoртування від 1 до n
// console.log(arrNum.sort((a,b) => b - a)[0]); // max element


// ============  .map() =============

// const arr = ['JavaScript', 'Java', 'Python', 'English', 'SQL'];
// console.log(arr.map((el, i, arr) => i == 0 || i ==(arr.length-1) ? `**${el}**` : el));

// const arrNum = [1, 3, 6, 8];
// const newArr = arrNum.map(item => item ** 2);
// console.log(newArr);
 //перевод строки в числове значення. 3 способи :
// const newArr = arrNum.map(item => +item);
// const newArr = arrNum.map(item =>Number(item);
// const newArr = arrNum.map(Number);


// ========== .reduce() .reduceRight()