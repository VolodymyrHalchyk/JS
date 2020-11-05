// --створити масив та вивести його в консоль:
// - з 5 числових значень

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);

// - з 5 стічкових значень

// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr);

// - з 5 значень стрічкового, числового та булевого типу

// let arr = [1, '2', 'srt', true, 0.15];
// console.log(arr);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = [];
// arr[0] = 1;
// arr[1] = 'str';
// arr[2] = true;
// arr[3] = 'false'
// console.log(arr);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>123</div>`);
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>${i} some text</div>`);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while ( i < 20) {
//     document.write(`<h1>Some text</h1>`)
//     i++
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i < 20) {
//     document.write(`<h1>${i} some text</h1>`);
//     i++
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10'];
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arr = [12, 3.14, 'srt', true, 'false', -6, '321', false, 35, 0.15];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. 
// За допомогою if та typeof вивести тільки булеві елементи

// let arr = [12, 3.14, 'srt', true, 'false', -6, '321', false, 35, 0.15];
// for (let i = 0; i < arr.length; i++) {
//     if ( typeof arr[i] === 'boolean') {
//         console.log(arr[i]);
//     }
// };

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
//  За допомогою if та typeof вивести тільки числові елементи

// let arr = [12, 3.14, 'srt', true, 'false', -6, '321', false, 35, 0.15];
// for (let i = 0; i < arr.length; i++) {
//     if ( typeof arr[i] === 'number') {
//         console.log(arr[i]);
//     }
// };

// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи

// let arr = [12, 3.14, 'srt', true, 'false', -6, '321', false, 35, 0.15];
// for (let i = 0; i < arr.length; i++) {
//     if ( typeof arr[i] === 'string') {
//         console.log(arr[i]);
//     }
// };

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами)
//   через звернення до конкретних індексів.Вивести в консоль всі його елементи в циклі.

// let arr = [];
// arr[0] = 23;
// arr[1] = 'str';
// arr[2] = true;
// arr[3] = 3.14;
// arr[4] = '45';
// arr[5] = -98;
// arr[6] = 'arr';
// arr[7] = 'false';
// arr[8] = false;
// arr[9] = 29; 
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     if (i % 1 == 0) {
//         console.log(i);
//         document.write(i);
//     }
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//         console.log(i);
//         document.write(i + `<br/>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i+=2) {
//         console.log(i);
//         document.write(i + `<br/>`)
// }

// - Створити цикл for на 10 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 10; i++){
//         if (i % 2 == 0) {
//                 console.log(i);
//                 document.write(i + '<br/>')
//         }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++){
//         if (i % 2 == 0) {
//                 console.log(i);
//                 document.write(i + '<br/>')
//         }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++){
//         if (i % 2 == 1) {
//                 console.log(i);
//                 document.write(i + '<br/>')
//         }
// }

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

// for (let minutes = 0; minutes < 60; minutes++) {
//         for (let seconds = 0; seconds < 60; seconds++) {
//                 console.log(minutes + 'm ' + seconds + 's');
//                 if (minutes == 2 && seconds == 0) break
//         } 
//         if (minutes == 2) {
//         break
//         }
// }

// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

// for (let hour = 0; hour < 24; hour++) {
//         for (let minutes = 0; minutes < 60; minutes++) {
//                 for (let seconds = 0; seconds < 60; seconds++) {
//                         console.log(hour + 'h ' + minutes + 'm ' + seconds + 's');
//                         if (hour == 3 && minutes == 20 && seconds == 0) break
//                 };
//                 if (hour == 3 && minutes == 20) break       
//         };
//         if (hour == 3) break
// }
// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let summ = '';
// let arr = ['a', 'b', 'c'];
// for (i = 0; i < arr.length; i++) {
//         summ += arr[i]
// }
// alert(summ);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let summ = '';
// let i = 0;
// let arr = ['a', 'b', 'c'];
// while ( i < arr.length ) {
//         summ+=arr[i]
//         i++;
// }
// alert(i);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let summ = '';
// let arr = ['a', 'b', 'c'];
// for (element of arr) {
//         summ += element;
// }
// alert(summ)