//перебір масиву
//bubble sorting
// const arr = [10, 2, 4, 67, 97, 139, 3, 7]
//
// for ( let i = 0; i<arr.length-1; i++) {
//     for (let j=i+1; j<arr.length; j++ ){
//         if(arr[i]>arr[j]){   // > сортування від найменшого до найбільшого, < від найбільшого до найменшого
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j]=temp;
//         }
//     }
// }
// console.log(arr)
//console.log(arr[arr.length-1]); //arr.at(-1) //max число в масиві, після перебору
//console.log(arr[arr.length-2]); //arr.at(-2) // друге мах число в масиві

//Пірамідка з одиничками
// let n = 5;
// let str = '';
//
// for (let i = 1; i<=n; i++){
//     for ( let j=1; j<=i; j++){
//         str = str+"1";
//
//     }
//     str +='\n';
// }
// console.log(str);

//54321
//4321
//321
//21
//1

// let n = 5;
// let str = '';
//
// for (let i = 1; i<=n; i++){
//     for ( let j=n+1-i; j>=i; j--){
//         str = str+j;
//
//     }
//     str +='\n';
// }
// console.log(str);

//    1
//   12
//  123
// 1234
//12345

// let n = 5;
// let str = '';
//
// for (let i = 1; i<=n; i++){
//     str+=" ".repeat(n-i);
//     for ( let j=1; j<=i; j++){
//         str = str+j;
//
//     }
//     str +='\n';
// }
// console.log(str);


//    11
//   1221
//  123321
// 12344321
//1234554321

// let n = 5;
// let str = '';
//
// for (let i = 1; i<=n; i++){
//     str+=" ".repeat(n-i);
//     for ( let j=1; j<=i; j++){
//         str = str+j;
//
//     }
//     for (let j=i; j>=1; j--){
//         str +=j;
//     }
//     str +='\n';
// }
// console.log(str);


//    1
//   121
//  12321
// 1234321
//123454321

// let n = 5;
// let str = '';
//
// for (let i = 1; i<=n; i++){
//     str+=" ".repeat(n-i);
//     for ( let j=1; j<=i; j++){
//         str = str+j;
//
//     }
//     for (let j=i-1; j>=1; j--){
//         str +=j;
//     }
//     str +='\n';
// }
// console.log(str);

