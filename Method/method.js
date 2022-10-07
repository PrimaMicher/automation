// =======compare with string

// let string = "abcde";
// console.log(string[2]);
//
// string[2] = 'm'; // різниця між стрінгою та масивом, що ми зі стрінги можна витягнути елемент, але змінити не можна
// console.log(string);
//
// const array = ['a', 'b', 'c', 'd', 'e'];
// console.log(array);
//
// array[2] = 'M';  //can change
// console.log(array);

//=============  split(); join()  ==================================

// === split(); ділить строку по вказаному роздільнику, повертає масив
// === split(); => повертає масив_всіх_символів

// let str = " Hello world";
// console.log(str);
//
// console.log(str.split(" ")); // split виводить строку в масив, але не створює його
//                                 для цього потрібно створити нову змінну
// let stringNew = str.split(" ");
// console.log(stringNew);

// === join(); конвертує масив в строку ро замовчуванню
// розділяє символи комою, but do not change

// let array = [ 'a', 'b', 'c', 1, 2, 3];
// console.log(array);
//
// console.log(array.join());
// console.log(array)
//
// let newSringFromArray = array.join(" "); //по дуфолту склуює з комою, щоб були ін. розділові знаки ставимо в " "
// console.log(newSringFromArray)

// ================ Methods pop/push, shift/unshift ==========

// push - додає елеминт(и) в кінець
// pop - видаляє останній елемент (та повертає цей елемент!)

// const letters = ['a', 'b', 'c', 'd', 'e'];
// console.log(letters);

// letters.push('F', 's', 1, 5);
// let c = letters.push('g')

// console.log(letters);
// console.log(c) // це виведе кількість елементів в масиві, з врахуванням запушиного останнього елементу

// letters.pop()
// let a = letters.pop();
// console.log(letters);
// console.log(a); // показує який останній елемент був видалений

// unshift => добавляє елемент(и) на початок масиву
// shift видаляє елемент з початку, посуваючи чергу так, що 2-й елемент стає першим
// та повертає цей елемент

// const bigLetters = ['A', 'B', 'C', 'D', 'E'];

// bigLetters.unshift('S')
// let b = bigLetters.unshift('X', 'Y');
// console.log(bigLetters);
// console.log(b) // рахує довжину масиву, включаючи останні додані елементи
//
// bigLetters.shift();
// let d = bigLetters.shift()
// console.log(bigLetters);
// console.log(d);

