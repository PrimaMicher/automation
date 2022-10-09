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

//====================== Об'єднання масивів=============================
// конкатинація не використовується для об'єднання масивів

// const letters = ['a', 'b', 'c', 'd', 'e'];
// const bigLetters = ['A', 'B', 'C', 'D', 'E'];
//
// console.log(letters+bigLetters); // виведе склеяну строку, а не об'єднає масив!!!
// console.log(String(letters)); //метод при якому масив конвертується в строку
                              // так само і з числами (напр. буде не 7, а "7"


//===== push()=========
// let arr1 = [ 'a', 'b', 'c'];
// let arr2 = [ 1, 2, 3];

// arr1.push(arr2)
// console.log(arr1); //запушить масив в інший масив, але як один елемент

//==============push() + spread operator ...

// arr1.push(...arr2); // (...arr2) ==> ('a', 'b', 'c')
// console.log(arr1);

// через третій масив

// const arr3 =[...arr1,...arr2];
// console.log(arr3);

//=============spread operator(...)===========

// const numbers = [4, 8, 89, 17, 565, 45]
// console.log(numbers);      // виведе у вигляді масиву
// console.log(...numbers);  // буде розгорнутим

//console.log(Math.max(4, 8, 89, 17));

// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));

// ********** ==; ===  *************** compare arrays
// порівнює лише к-сть елементів в масиві

// const arr = [1, 3];
// const arr1 = [1, 2];
//
// console.log(arr < arr1);
// console.log (arr > arr1);
// console.log(arr == arr1);
// console.log(JSON.stringify(arr) == JSON.stringify(arr1)); //порівнює саме елементи в масиві

//======================================
// let arr = [1, 2, 3];
// let emptyArr = [];
//
// console.log(String(arr), String(emptyArr));
// console.log(Number(arr), Number(emptyArr));
// console.log(Boolean(arr), Boolean(emptyArr));

// ================= String Methods =============
// === length

// let text = 'ASDGKBMLFKGLF'
// let length = text.length;
// console.log(length);

// ==== .slice()

// let str = "Apple, Banana, Kiwi";
// let part = str.slice(7,13) // виріже зі строки від 7 до 13(не вкл)
// console.log(part)

// === replace() заміняє частину строки
// ===replaceAll робить заміну якщо символ чи слово зустрічається декілька разів

// let txt = "Please visit Microsoft"
// let newTxt = txt.replace("Microsoft", "Google")
// console.log((newTxt))

 // =====charAt() шукає елемент по індексу
// let txt = "Hello";
// let letter = txt.charAt(0);
// console.log(letter)
// console.log(txt[0]) // можна відразу шукати по індексу, не використовуючи метод

// === repeat()

// let a = "Hi!"
// console.log(a.repeat(5));

// ==== trim() видаляє спейси з країв

// let txt = "        Hello!      "
// let result = txt.trim();
// console.log(result)