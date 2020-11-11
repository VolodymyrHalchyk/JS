//1 - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. 
// (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

let car = {
    brand: 'Mazda',
    power: 2.5,
    injector: true,
}
let me = {
    name: 'Volodymyr',
    age: 29,
    girl: false,
}
let pc = {
    ram: 6,
    processor: 1.9,
    mark: 'ASUS',
}
let phone = {
    memory: 64,
    os: 'Android',
    scaner: true,
}
let clock = {
    color: 'black',
    design: 'sport',
    guarantee: true,
}
//2 - создать 5 объектов с полностью разным набором полей. 
// В каждом объекте должен присутсвовать массив и внутренний объект.Опишите что угодно, машину, картину, болт...
// Пример: let man = { name: 'kokos', skills: ['java', 'js'], wife: { name: 'cherry' } };

let neighbor = {
    name: 'Ruslan',
    skills: ['sleep', 'eat'],
    girl: { name: 'Hand'},
} 
let table = {
    dimensions: { width: 100, height: 110 },
    color: 'white',
    legs: [1,2,3,4,],
}
let refrigerator = {
    temperatures: 3,
    build: { dor: 1, shelf: 3 },
    compartment: ['freezers', 'cold store'],
}
let usik = {
    category: 'super heavy weight',
    battlesList: {win: 17, loss: 0 },
    heavyweightTitles: ['WBC', 'WBA', 'WBO', 'IBF',],
}
let pizza = {
    ingredients: {sause: 'tomato', meat: 'chicken', cheese: 'mozzarella'},
    weight: [70,120,150],
    calories: 560,
}

// 3- При помощи for in вывести все ключи всех объектов из задания 1 и 2

// for (keys in car) {
//     console.log(keys);
// }
// for (keys in me) {
//     console.log(keys);
// }
// for (keys in pc) {
//     console.log(keys);
// }
// for (keys in phone) {
//     console.log(keys + ' : ' + phone[keys]);
// }
// for (keys in clock) {
//     console.log(keys + ' : ' + clock[keys]);
// }

// neighbor table refrigerator usik pizza
// for (keys in neighbor) {
//     console.log(keys);
// }
// for (keys in table) {
//     console.log(keys);
// }
// for (keys in refrigerator) {
//     console.log(keys);
// }
// for (keys in usik) {
//     console.log(keys);
// }
// for (keys in pizza){
//     console.log(keys);
// }

// 4- При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

// console.log(Object.keys(car));
// console.log(Object.keys(me));
// console.log(Object.keys(pc));
// console.log(Object.keys(phone));
// console.log(Object.keys(clock));
// console.log(Object.keys(neighbor));
// console.log(Object.keys(table));
// console.log(Object.keys(refrigerator));
// console.log(Object.keys(usik));
// console.log(Object.keys(pizza));

// 5- Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет.
// (Значаения полей могу быть выдуманными)

// let cars = [
//     { model: 'mazda', year: 2012, power: 2.0, color: 'red' },
//     { model: 'porche', year: 2000, power: 7.5, color: 'black' },
//     { model: 'mers', year: 1991, power: 2.5, color: 'blue' },
//     { model: 'audi', year: 1999, power: 2.0, color: 'yellow' },
//     { model: 'zaz', year: 1979, power: 0.7, color: 'white' },
//     { model: 'toyota', year: 2005, power: 2.5, color: 'grey' },
//     { model: 'lamorghini', year: 2020, power: 3.7, color: 'red' },
//     { model: 'peugeot', year: 2009, power: 1.5, color: 'green' },
//     { model: 'smart', year: 2018, power: 0.9, color: 'black' },
//     { model: 'opel', year: 2000, power: 1.9, color: 'red' },
// ];
// console.log(cars);

// 6- Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион.
// (Значаения полей могу быть выдуманными)

// let cities = [
//     { name: 'Lviv', population: 1000000, country: 'Ukraine', region: 'Europe' },
//     { name: 'London', population: 1900000, country: 'England', region: 'Europe' },
//     { name: 'Paris', population: 2100000, country: 'France', region: 'Europe' },
//     { name: 'Roma', population: 1100000, country: 'Italia', region: 'Europe' },
//     { name: 'Tokio', population: 4000000, country: 'Japan', region: 'Asia' },
//     { name: 'Washington', population: 1700000, country: 'USA', region: 'North America' },
//     { name: 'Pekin', population: 6000000, country: 'China', region: 'South America' },
//     { name: 'Sydney', population: 2700000, country: 'Australia', region: 'Australia' },
//     { name: 'Rio', population: 2100000, country: 'Brasil', region: 'South America' },
//     { name: 'Dakar', population: 900000, country: 'Senegal', region: 'Africa' },
// ];
// console.log(cities);

// 7- Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
// Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

// let cars2 = [
//     { model: 'mazda', year: 2012, power: 2.0, color: 'red', driver: { name: 'Vova', age: 29, sex: 'male', experience: 4 } },
//     { model: 'porche', year: 2000, power: 7.5, color: 'black', driver: { name: 'Vasya', age: 28, sex: 'male', experience: 3 } },
//     { model: 'mers', year: 1991, power: 2.5, color: 'blue', driver: { name: 'Ira', age: 21, sex: 'female', experience: 1 } },
//     { model: 'audi', year: 1999, power: 2.0, color: 'yellow', driver: { name: 'Tolya', age: 34, sex: 'male', experience: 6 } },
//     { model: 'zaz', year: 1979, power: 0.7, color: 'white', driver: { name: 'Kolya', age: 55, sex: 'male', experience: 15 } },
//     { model: 'toyota', year: 2005, power: 2.5, color: 'grey', driver: { name: 'Olya', age: 35, sex: 'semale', experience: 9 } },
//     { model: 'lamorghini', year: 2020, power: 3.7, color: 'red', driver: { name: 'Venya', age: 21, sex: 'male', experience: 4 } },
//     { model: 'peugeot', year: 2009, power: 1.5, color: 'green', driver: { name: 'Anna', age: 28, sex: 'female', experience: 5 } },
//     { model: 'smart', year: 2018, power: 0.9, color: 'black', driver: { name: 'Vitya', age: 42, sex: 'male', experience: 7 } },
//     { model: 'opel', year: 2000, power: 1.9, color: 'red', driver: { name: 'Seb', age: 33, sex: 'male', experience: 8 } },
// ];
// console.log(cars2);

// 8- проитерировать каждый массив из задания 5,6,7 при помощи while.

// let i = 0;
// 
// while (i<cars.length) {
//     console.log(cars[i]);
//     i++;
// }

// while (i<cities.length) {
//     console.log(cities[i]);
//     i++
// }

// while (i<cars2.length) {
//     console.log(cars2[i]);
//     i++
// }

// 9- проитерировать каждый массив из задания 5,6,7 при помощи for .

// for (let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }

// for (let i = 0; i < cities.length; i++) {
//     console.log(cities[i]); 
// }

// for (let i = 0; i < cars2.length; i++){
//     console.log(cars2[i]);
// }

// 10- проитерировать каждый массив из задания 5,6,7 при помощи  for of.

// for (const key of cars) {
//     console.log(key);
// }
// for (const key of cities) {
//     console.log(key);
// }
// for (const key of cars2) {
//     console.log(key);
// }

// 11- взять объекты из задания 1 и превратить каждый в json.
// - взять json из задания 11 и превратить их обратно в объекты.

// let carClon = JSON.parse(JSON.stringify(car));
// console.log(carClon);

// let meClon = JSON.parse(JSON.stringify(me));
// console.log(meClon);

// let pcClon = JSON.parse(JSON.stringify(pc));
// console.log(pcClon);

// let phoneClon = JSON.parse(JSON.stringify(phone));
// console.log(phone);

// let clockClon = JSON.parse(JSON.stringify(clock));
// console.log(clockClon);

// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

// for (let i = 0; i < cars.length; i++) {
//     let j = JSON.stringify(cars[i]);
//     cars[i] = j;
// }
// console.log(cars);

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

// let i = 0;
// while (i < cities.length) {
//     cities[i] = JSON.stringify(cities[i]);
//     i++;
// }
// console.log(cities);

// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

// let cars2Clon = [];
// for (let i = 0; i < cars2.length; i++) {
//     cars2Clon.push(JSON.stringify(cars2[i]))
// }
// console.log(cars2Clon);

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является 
// массивом.Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

// let users = [
//     { name: 'zzz', age: 21, status: true, skills: ['a', 2, true, 'false'] },
//     { name: 'xxx', age: 32, status: true, skills: ['b', 3, true, 'true'] },
//     { name: 'ccc', age: 22, status: true, skills: ['aa', 21, false, 'false'] },
//     { name: 'vvv', age: 43, status: true, skills: ['bb', 12, true, 'false'] },
//     { name: 'bbb', age: 14, status: false, skills: ['ab', 11, false, 'false'] },
// ];

// for (let i = 0; i < users.length; i++) {
//     for (let j in users[i]) {
//         if ( j == 'skills')
//         for (let l = 0; l < users[i][j].length; l++) {
//                 console.log(users[i][j][l]);
//             }
//         }
// }

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является 
// массивом.Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills.
// Скопировать все skills всех пользователей в отедльный массив

// let arrSkills = [];
// for (let i = 0; i < users.length; i++) {
//     for (let j in users[i]) {
//         if ( j == 'skills'){
//             for (let l = 0; l < users[i][j].length; l++) {
//                 arrSkills.push(users[i][j][l])
//             }
//         }
//     }
// }
// console.log(arrSkills);

// let arrSkills = [];
// for (i of users) {
//     arrSkills.push(i.skills)
// }
// console.log(arrSkills);
// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.

// let users = [
//     { name: 'vasya', age: 31, status: false, skills: ['java', 'js'] },
//     { name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html'] },
//     { name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo'] },
//     { name: 'olya', age: 28, status: false, skills: ['java', 'js'] },
//     { name: 'max', age: 30, status: true, skills: ['mysql', ',mongo'] }
// ];

// for (obj of users) {
//     for (user in obj) {
//         console.log(obj[user]);
//     }
// }


// let users = [
//     {
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
//     },
//     {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
//     },
//     {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
//     },
//     {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
//     },
//     {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
//     },
//     {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
//     },
//     {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
//     },
//     {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
//     },
//     {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
//     },
//     {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
//     },
//     {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
//     }
// ];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// let usersAdress = [];
// for (let user of users) {
//     usersAdress.push(user.address);
// }
// console.log(usersAdress);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги 
// document.createElement.Всі данні в одному блоці.

// for (user of users) {
//     let div = document.createElement('div');
//     document.body.appendChild(div);
//     div.innerText = (user.name + ' ' + user.age + ' ' + user.status + ' ' + user.address.city + ' ' + user.address.country + ' ' + user.address.houseNumber);
//     }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги
// document.createElement, розділивши всі властивості по своїм блокам(div > div * 4)

// for (user of users) {
//     let div = document.createElement('div');
//     document.body.appendChild(div);
//     div.style.backgroundColor = 'blue';
//     for (value in user) {
//             let valueDiv = document.createElement('div');
//             div.appendChild(valueDiv);
//             valueDiv.style.backgroundColor = 'red';
//             valueDiv.style.marginBottom = '20px';
//         if (value == 'address') {
//             div.appendChild(valueDiv);
//             valueDiv.innerText = (user.address.city + ' ' + user.address.country + ' ' + user.address.street + ' ' + user.address.houseNumber)
//         } else {
//             valueDiv.innerText = user[value];
//         }
//     }
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги
// document.createElement, розділивши всі властивості по своїм блокам, блок з адресою зробити окремим блоком, 
// з блоками для кожної властивості

// for (user of users) {
//     let div = document.createElement('div');
//     document.body.appendChild(div);
//     document.write('<br>')
//     // div.style.backgroundColor = 'blue';
//     for (value in user) {
//             let valueDiv = document.createElement('div');
//             div.appendChild(valueDiv);
//             // valueDiv.style.backgroundColor = 'red';
//             // valueDiv.style.marginBottom = '20px';
//             valueDiv.style.display = 'flex';    
//         if (value == 'address') {
//             for (i in user.address) {
//                 let addressDiv = document.createElement('div');
//                 // addressDiv.style.backgroundColor = 'yellow';
//                 valueDiv.appendChild(addressDiv);
//                 addressDiv.innerText = user.address[i];
//             }
//         } else {
//             valueDiv.innerText = user[value];
//         }
//     }
// }

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, 
{ id: 2, name: 'petya', age: 30, status: true },
{ id: 3, name: 'kolya', age: 29, status: true },
{ id: 4, name: 'olya', age: 28, status: false },];

let citiesWithId = [{ user_id: 3, country: 'USA', city: 'Portland' },
{ user_id: 1, country: 'Ukraine', city: 'Ternopil' },
{ user_id: 2, country: 'Poland', city: 'Krakow' },
{ user_id: 4, country: 'USA', city: 'Miami' },];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

// let usersWithCities = []
// for (let obj of usersWithId) {
//     let objectSum = obj;
//     for (let obj2 of citiesWithId) {
//         if (obj2.user_id == obj.id){
//             objectSum.address = obj2;
//         }
//     }
//     usersWithCities.push(obj);
// }
// console.log(usersWithCities);

// _________________

// let usersWithCities = JSON.parse(JSON.stringify(usersWithId));

// for (let obj of usersWithCities) {
//     for (obj2 of citiesWithId)
//     if (obj.id == obj2.user_id) {
//         obj.address = obj2;
//     }
// }
// console.log(usersWithCities);
// console.log(usersWithId);

// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по 
// id, class та тегу
// let div = document.createElement('div');
// document.body.appendChild(div);
// div.id = 'divka';
// div.classList.add('block');
// div.innerText = 'lorem lorem lorem lorem lorem lorem';


// let textId = document.getElementById('divka');
// console.log(textId);

// let textClass = document.getElementsByClassName('block');
// for (text of textClass) {
//     console.log(text);
// }

// let textTags = document.getElementsByTagName('div');
// for (text of textTags) {
//     console.log(text);
// }

// - змінити цей текст використовуючи селектори id, class,  tag

// textId.innerText = 'Tru-la-la';

// for (text of textClass) {
// text.innerText = 'Turu-ru';
// }

// for (text of textTags) {
//     text.innerText = 'Tram-pam-pam'
// }

// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag

// div.style.backgroundColor = 'blue';

// textId.style.height = '200px';
// textId.style.width = '100px';

// for (changes of textClass) {
//     changes.style.width = '100px';
//     changes.style.height = '200px';
// }

// for (changes of textTags) {
//     changes.style.width = '100px';
//     changes.style.height = '200px';
// }

// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені

// let div = document.createElement('div');
// document.body.appendChild(div);
// div.style.display = 'flex';
// div.style.width = '100%'

// let cellFirst = document.createElement('div');
// let cellSecond = document.createElement('div');
// let cellThird = document.createElement('div');
// div.appendChild(cellFirst);
// div.appendChild(cellSecond);
// div.appendChild(cellThird);
// cellFirst.style.border = '1px solid black';
// cellSecond.style.border = '1px solid black';
// cellThird.style.border = '1px solid black';
// cellFirst.style.height = '20px';
// cellSecond.style.height = '20px';
// cellThird.style.height = '20px';
// cellFirst.style.width = '33.3%';
// cellSecond.style.width = '33.3%';
// cellThird.style.width = '33.3%';

// for (let i = 0; i < 3; i++){
//     let cell = document.createElement('div');
//     div.appendChild(cell);
//     cell.style.border = '1px solid black';
//     cell.style.height = '20px';
//     cell.style.width = '33.3%';
// }



// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені

// let div = document.createElement('div');
// document.body.appendChild(div);
// div.style.display = 'flex';
// div.style.width = '100%'
// for (i = 0; i < 10; i++){
//     let line = document.createElement('div');
//     document.body.appendChild(line)
//     line.style.display = 'flex';
//     line.style.width = '100%';
//     line.style.height = '20px';
//     line.style.marginBottom = '10px';
//     let cellFirst = document.createElement('div');
//     let cellSecond = document.createElement('div');
//     let cellThird = document.createElement('div');
//     line.appendChild(cellFirst);
//     line.appendChild(cellSecond);
//     line.appendChild(cellThird);
//     cellFirst.style.border = '1px solid black';
//     cellSecond.style.border = '1px solid black';
//     cellThird.style.border = '1px solid black';
//     cellFirst.style.height = '20px';
//     cellSecond.style.height = '20px';
//     cellThird.style.height = '20px';
//     cellFirst.style.width = '100%';
//     cellSecond.style.width = '100%';
//     cellThird.style.width = '100%';
// }

// for (i = 0; i < 10; i++) {
//     let line = document.createElement('div');
//     document.body.appendChild(line)
//     line.style.display = 'flex';
//     line.style.width = '100%';
//     line.style.height = '20px';
//     line.style.marginBottom = '10px';
//         for (let i = 0; i < 3; i++){
//         let cell = document.createElement('div');
//         line.appendChild(cell);
//         cell.style.border = '1px solid black';
//         cell.style.height = '20px';
//         cell.style.width = '100%';
//     }
// }

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені

// for (let i = 0; i < 10; i++) {
//     let line = document.createElement('div');
//     document.body.appendChild(line);
//     line.style.display = 'flex';
//     line.style.width = '100%';
//     line.style.height = '20px';
//     line.style.marginBottom = '10px';
//         for (let i = 0; i < 5; i++){
//         let cell = document.createElement('div');
//         line.appendChild(cell);
//         cell.style.border = '1px solid black';
//         cell.style.height = '20px';
//         cell.style.width = '100%';
//     }
// }

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

// let n = +prompt('Введіть число рядків');
// let m = +prompt('Введіть число стовбців');
// for (let i = 0; i < n; i++) {
//     let line = document.createElement('div');
//     document.body.appendChild(line)
//     line.style.display = 'flex';
//     line.style.width = '100%';
//     line.style.height = '20px';
//     line.style.marginBottom = '10px';
//         for (let i = 0; i < m; i++){
//         let cell = document.createElement('div');
//         line.appendChild(cell);
//         cell.style.border = '1px solid black';
//         cell.style.height = '20px';
//         cell.style.width = '100%';
//     }
// }

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class

// let classElements = document.getElementsByClassName('class');
// console.log(classElements);

// //  - знайти всі параграфи ,та змінити текст на hello oktenweb!
// let p = document.getElementsByTagName('p');
// for (let i of p) {
//     i.innerText = 'hello okten'
// }

// //  - знайти всі div та змінити ім колір на червоний
// let div = document.getElementsByTagName('div');
// for (let i of div) {
//     i.style.backgroundColor = 'red';
// }

// ============
// ====class===
// ============

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи.
// Заголовки(h2) характеризують тему контенту яка вказана в параграфі.
// створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), 
// який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому 
// блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},

// 			];




// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. 
// Подсказка: в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту.