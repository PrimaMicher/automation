
//перший цикл нам дає кількість рядків, а по другому наповнення строки.
//for(let line = 1; line<=5; line++){
 //   let str = "";
    // for(let numInLine = 1; numInLine<=line; numInLine++){
 //       str = str+numInLine
//    }
 //   console.log(str)
//}

// for(let i=5; i>=1; i--) { //відповідає за кількість строк
// let str = "";
   // for(let j =1; j<=i; j++){ //відповідає за наповнення строки
//       str +=j;
//   }
//   console.log(str)
// }


// for(let i=1; i<=5; i++) {
// let str = "";
// for(let j =1; j<=i; j++){
//                         if (i==2) continue; якщо використовувати continue, тоді строку буде пропускати
      // str +=j;
      // if (i ==4) break;

  // }
  // console.log(str)
// }


//як достати елемент з вложеного масиву
// let arr = [1, ["a", 'b', [5, 7]], 3 , 'Hello']
//          0 _________________  2    3
//                    1   ____
//               0    1    2
//                         0 1
// ми зі стрінги 'Hello', теж можем витягнути окремі елементи(букви), бо строка веде себе як масив
// console.log(arr[1][2][1])
// console.log(typeof arr[3])

// як провірити пустий масив
//  let arr1 = []
// if (arr1.length == 0) {
//     console.log("It's empty")
// }