// Знайти суму всіх чисел у масиві
/*let arr = [1, 30, 5, 4, 3];
let sum = 0

for (let i=0; i<arr.length; i++) {
    sum += arr[i];
}
console.log (sum);*/

// Знайти суму парних чисел масиву

/*let arr = [1, 30, 5, 4, 3];
let sum = 0

for (let i=0; i<arr.length; i++) {
    if (arr[i] % 2 ==0){
        sum += arr[i];
    }

}
console.log (sum);*/



// Знайти всі від'ємні числа
/*let arr = [1, -30, 5,- 4, 3];
let sum = 0

for (let i=0; i<arr.length; i++) {
    if ( arr[i] < 0){
        console.log ("Від'ємні числа",arr[i]);

    } else {
    console.log ("Додатні числа:", arr[i]);
    }

}*/

// Перевірити чи число парне, а також чи є воно додаткове, від'ємне чи нуль
/*let arr = [1, -30, 0, -4, 6, 28, 35, -7, 0];
let sum = 0;
for (let i = 0; i<arr.length; i++) {
    if (arr[i] % 2 ==0) {
       if (arr[i] < 0) {
           console.log ("Negative number is:", arr[i]);
       } else if (arr[i] > 0) {
           console.log ("Positive number is:", arr[i])
       } else {
           console.log ("This is zero:", arr[i])
       }
    }
}*/

//Знайти МАХ значення
/*let arr = [1, -30, 0, -4, 6, 28, 35, -7, 0];
let max = arr[0];
for (let i = 1; i<arr.length; i++) {
    if (arr[i]>max) {
        max = arr[i];
    }
    }
console.log("Max number is:", max);*/

// MIN значення

/*let arr = [1, -30, 0, -4, 6, 28, 35, -7, 0];
let min = arr[0];
for (let i = 1; i<arr.length; i++) {
    if (arr[i]<min) {
        min = arr[i];
    }
}
console.log("Min number is:", min);*/

// Перебор строки

/*let str = 'hello';
console.log(str.length);
console.log (str[4]);
let sum = 0;
for (let i = 0; i<str.length; i++) {
    if (str[i]=='l') {
        sum++;

    }
}
console.log (sum);*/


// Якщо працювати з масивами, то краще використовувати цикл for...of

// Пошук індекса знаючи його елемент

//let arr = [1, -30, 0, -4, 6, 28, 35, -7, 0];
//console.log (arr.indexOf(6));

// якщо довжина масивів одинакова

//let arr_3 = [4, 6, 7];
//let arr_4 = [8, 1, 9];
//let sum = 0;

//for (let  i=0; i<arr_3.length; i++) {
//    sum = arr_3[i] + arr_4[i];
//    console.log(sum);
//}



//Домашка
//При помощи цикла for выведите чётные числа от 2 до 10


/*for (let i=1; i<=10; i++) {
    if ( i % 2 ==0){
        console.log(i)
    }

}*/

//Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n > 1 – простое, если при его
// делении на любое число кроме 1 и n есть остаток.
// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
// Напишите код, который выводит все простые числа из интервала от 2 до n.
// Для n = 10 результат должен быть 2,3,5,7.

//let n = 10;
//for (let i = 2; i<=n; i++) {
//    let num = true;
//    for(let k = 2; k < i; k++) {
//        if (i % k == 0) {
//           num = false;
//        }
//    }
//        if (num ==true){
//            console.log(i);
//        }
//}


//Додавання масивів
//let arr = [1, 2, 10, -5, 7, 25, 100, 98];
//let arr2 = [25, 56, 1, 25, 7, 78, 98, 33];
//let sum = 0;
//for (let i = 0; i<arr.length; i++) {
//    sum = arr[i]+arr2[i];
//console.log(sum);
//}

//Якщо масиви будуть мати різну довжину
/*let arr = [1, 2, 10, -5, 7, 25, 100, 98,15];
let arr2 = [25, 56, 1, 25, 7, 78, 98];
let sum = 0;
for (let i = 0; i<arr.length+arr2.length; i++) {
    if (i < arr.length){
        sum+=arr[i];
        //console.log(sum, "", arr[1])

    } else {
        sum += arr2[i - arr.length]
        //console.log(sum, "", arr2[i]);
    }
}
console.log (sum);

let sum1 =0;
for (let i=0; i<arr.length; i++) {
    sum1 += arr[i];
}
for (let i=0; i<arr2.length; i++){
    sum1+= arr2[i];
}
console.log (sum1);*/




// ============While loop=======
// while (condition) {
// // code block
// }

//let i=0;
//while (i<3) {
//    console.log (i)
//    i++
//}

//let j = 7;
//while (j !=0){
//    console.log(j); //якщо console.log вивести в середені циклу, то виведе результат від 7 до 1
//    j--
//}
// якщо за циклом провисати console.log, то покаже кінцевий результат 0


//const fruit = ['apple', 'pear', 'plump', 'grape']
//let index =0;
//while (index <fruit.length) {
//    console.log (fruit[index])
//    index++
//}

// ================do...while================

//do{
//  // code block
// } while (condition)

//let sum = 0;
//let number =0;

//do {
//    sum += number;
//    number = parseInt(prompt( 'Enter a number:'));

//} while ( number >=0)
//document.write(`the sum is ${sum}`);


