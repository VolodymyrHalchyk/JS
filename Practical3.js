
// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
let dog = {
    name: 'Barbos',
    breed: 'Dvorsterier',
    color: 'Haki',
    age: 7,
    castration: false,
}
// - людину
let human = {
    name: 'Ivan',
    age: 20,
    country: 'Ukraine',
    status: true,
    wrok: false,
}
// - автомобіль
// let car = {
//     model: 'Mers',
//     injector: false,
//     color: 'red',
//     power: 2.5,
//     manufacturer: 'Germany',
// }
// - квартиру
// let apartment = {
//     area: 40,
//     room: 2,
//     water: true,
//     electrician: false,
//     number: 55,
// }
// - книгу
// let boock = {
//     name: 'It',
//     author: 'Stiphen King',
//     relase: 1991,
//     genre: 'horror',
//     pages: 666,
// }
// -- Створити масив та вивести його в консоль:
// - з 5 собак

// let arr = [
//     {name: 'Pes', breed: 'dog', age: 7},
//     {name: 'Gav', breed: 'labrador', age: 6},
//     {name: 'Huligav', breed: 'staf', age: 4},
//     {name: 'Rex', breed: 'pitbul', age: 3},
//     {name: 'Pex', breed: 'taxa', age: 5},
// ];
// console.log(arr);

// - 3 5 людей

// let arr = [
//     { name: 'Kolya', age: 42, sex: 'male' },
//     { name: 'Olya', age: 31, sex: 'female' },
//     { name: 'Vanya', age: 22, sex: 'male' },
//     { name: 'Anya', age: 19, sex: 'female' },
//     { name: 'Viniamin', age: 18, sex: 'male' },
// ];
// console.log(arr);

// - з 5 автомобілів

// let arr = [
//     { model: 'BMW', power: 2.9, injector: true},
//     { model: 'ZAZ', power: 1.1, injector: false},
//     { model: 'Mers', power: 3.5, injector: true},
//     { model: 'Porche', power: 5.5, injector: true},
//     { model: 'Toyota', power: 2.0, injector: true},
// ];
// console.log(arr);

// -- створити об'єкт (не меньше 5ти властивостей) який описує, 
// одна з властивостей обов'язково повинна бути об'єктом, ще одна - масивом
// - будинок

// let house = {
//     square: 100,
//     room: { first: 2, second: 3 },
//     isPrivate: true,
//     electrician: true,
//     additionally: ['basement', 'loft']
// };

// // - водій

// let driver = {
//     name: 'Vahtang',
//     categori: 'B',
//     experience: 5,
//     car: 'Lanos',
//     company: 'Bolt'
// };

// // - іграшку

// let toy = {
//     type: 'Bear',
//     color: 'brown',
//     material: 'synthetic',
//     price: 25,
//     manufacturer: 'China'
// };

// // - стіл

// let table = {
//     color: 'white',
//     heigth: 1,
//     square: 2,
//     price: 250,
//     type: 'kitchen',
// }

// // - сумка

// let bag = {
//     color: 'black',
//     weight: 0.7,
//     volume: 1,
//     price: 120,
//     compartments: 2
// }

// Дан массив:
// let users = [
// 				{name: 'vasya', age: 31, status: false},
// 				{name: 'petya', age: 30, status: true},
// 				{name: 'kolya', age: 29, status: true},
// 				{name: 'olya', age: 28, status: false},
// 				{name: 'max', age: 30, status: true},
// 				{name: 'anya', age: 31, status: false},
// 				{name: 'oleg', age: 28, status: false},
// 				{name: 'andrey', age: 29, status: true},
// 				{name: 'masha', age: 30, status: true},
// 				{name: 'olya', age: 31, status: false},
// 				{name: 'max', age: 31, status: true}
// 			];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія

// console.log(users[7].status);

// - статус Максима

// for (user of users) {
//     if (user.name == 'max') {
//         console.log(user.status);
//     }
// }

// - ім'я передостаннього об'єкту

// console.log(users[users.length-2].name);


// - ім'я третього об'єкта

// console.log(users[2].name);

// - вік Олега

// for (key of users) {
//     if (key.name == 'oleg') {
//         console.log(key.age);
//     }
// }

// - вік Олі

// for (key of users) {
//     if (key.name == 'olya') {
//         console.log(key.age);
//     }
// }

// - вік + ім'я 5го об'єкта

// console.log(users[4].name + users[4].age);

// - вік + сатус Анни
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!

// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"

// let pContent = document.getElementById('content').textContent;
// console.log(pContent);

// // - отримує текст з блоку з id "rules"

// let divRules = document.getElementById('rules').textContent;
// console.log(divRules);

// // - замініть текст параграфа з id 'content' на будь-який інший

// pContent.innerText = "замініть текст параграфа з id 'content' на будь-який інший";

// // - замініть текст параграфа з id 'rules' на будь-який інший

// divRules.innerText = "замініть текст параграфа з id 'rules' на будь-який інший"

// // - змініть кожному елементу колір фону на червоний

// let arr = [];
// divRules.style.backgroundColor = 'red';
// pContent.style.backgroundColor = 'red';
// arr.push(divRules);
// arr.push(pContent);
// let ul = document.getElementsByTagName('ul');
// let li = document.getElementsByTagName('li');
// for (i of ul) {
//     arr.push(i);
//     i.style.backgroundColor = 'red';
// }
// for (i of li) {
//     arr.push(i);
//     i.style.backgroundColor = 'red';
// }
// // - змініть кожному елементу колір тексту на синій

// for (i of arr) {
//     i.style.color = 'blue'
// }

// // - отримати весь список класів елемента з id=rules і вивести їх в console.log

// let rulesClassList = divRules.classList;
// console.log(rulesClassList);

// // - отримати всі елементи з класом fc_rules

// let fcRules = document.getElementsByClassName('fc');
// console.log(fcRules);
// // - поміняти колір тексту у всіх елементів fc_rules на червоний
// for (i of fcRules) {
//     i.style.color = 'pink'
// }
// ====================
// ====================
// ====================

// =================
// =====class=======
// =================
// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший

// let mainHeader = document.getElementById('main_header');
// mainHeader.style.color = 'red';

// -- робить шириниу елементу ul 400 пікселів

// let ul = document.getElementsByTagName('ul');
// for (i of ul) {
//     i.style.width = '400px'
// }

// -- робить шириниу всіх елементів з класом linkList шириною 50%

// let linkListClass = document.getElementsByClassName('linkList');
// for (i of linkListClass) {
//     i.style.width = '50%'
// }

// -- отримує текст який зберігається в елементі з класом listElement2

// let listElement2 = document.getElementsByClassName('listElement2');
// console.log(listElement2[0].textContent);

// -- отримує всі елементи li та змінює ім колір фону на сірий

// let li = document.getElementsByTagName('li');
// for (i of li) {
//     i.style.backgroundColor = 'grey'
// }

// -- отримує всі елементи 'a' та додає їм клас anchor

// let a = document.getElementsByTagName('a');
// for (i of a) {
//     i.classList.add('anchor')
// }

// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, 
// змінює йому розмір тексту на 40 пікселів

// for (i of a) {
//     if (i.textContent == 'link3') {
//         i.style.fontSize = '40px'
//     }
// }

// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// for (let i = 0; i < a.length; i++){
//     let b = `elenemt_${a[i].textContent}`;
//     console.log(b);
//     i.classList.add(`${b}`)
// }

// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let subHeader = document.getElementsByClassName('sub-header');
// for (i of subHeader) {
//     i.style.backgroundColor = prompt('Color?')
// }

// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// Колір отримати з prompt()

// let subHeader = document.getElementsByClassName('sub-header');
// for (i of subHeader) {
//     if (i.textContent == 'content 2 segment') {
//         i.style.backgroundColor = prompt('Color?')  
//     }
// }

// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let content1 = document.getElementsByClassName('content_1');
// for (i of content1) {
//     i.innerText = prompt('Text?')
// }

// -- отримати елементи p та змінити їм paddin на довільне значення

// let p = document.getElementsByTagName('p');
// for (i of p) {
//     i.style.padding = '30px'
// }

// -- отримати елементи з класом text2 та змінити їм текст на довільне значення

// let text2 = document.getElementsByClassName('text2');
// for (const iterator of text2) {
//     iterator.innerText = 'lorem lorem'    
// }
