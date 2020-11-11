// - створити функцію яка виводить масив

// let someArr = [1,4,7,9];

// function displaysArr1(value){
  
//   if(Array.isArray(value)){
//   console.log(value)} else {
//     console.log('is not array')
//   }
  
// }
// displaysArr1(someArr);

// function displaysArr2(value){
//   console.log(value);
// }

// displaysArr2(someArr)


// - створити функцію яка заповнює масив рандомними числами та виводить його. 
// Для виведення використати попвередню функцію.

// function random(value){
//   let result = [];
//   for (let i = 0; i<value; i++){
//   result.push(Math.floor(Math.random() * (100 - 0 + 1)) + 0);
//   }
//   displaysArr1(result);
// }
// random(9);



// function randomNumber(min,max,makeNumbers) {
//     let arr = [];
//     let minValue = min;
//     let maxValue = max;
//     for (let i = 0; i < makeNumbers; i++) {
//         arr.push(Math.floor(Math.random() * (max - min + 1) + min));
//     }
//     displaysArr1(arr);
// }
// randomNumber(0, 100, 5);

// - створити функцію яка приймає три числа та виводить та повертає найменьше.

// function minReturn(value1, value2, value3){
  
//   if (value1 >= value2 && value3 >= value2){
//     console.log(value2);
//     return console.log(value2)
//   } else if (value2>=value1 && value3>=value1){
//     return console.log(value1);
//   } else if ( value1>=value3 && value2>=value3){
//     return console.log(value3);
//   }
// }
// minReturn(10,5,6)

// function minValue(value1, value2, value3) {
//     if (typeof(value1) !== 'number' || typeof(value2) !== 'number' || typeof(value3) !== 'number') {
//         console.log('incorrectly entered number');
//         // return;
//     } else {
//         if (value1 <= value2 && value1 <= value3) {
//             console.log(value1);
//         }
//         else if (value2 <= value1 && value2 <= value3) {
//             console.log(value2);
//         }
//         else if (value3 <= value1 && value3 <= value2) {
//             console.log(value3);
//         }
//     }
// }
// minValue(3, 3, 55);

// - створити функцію яка приймає три числа та виводить та повертає найбільше.

// function maxValeuReturn(value1, value2, value3){
//   let maxValue = arr[0];
//   let arr = [value1, value2, value3];
//   for (let i = 0; i<arr.length; i++){
//     if(arr[i] > maxValue) {
//       maxValue = arr[i];
//     }
//   }
//   console.log(maxValue);
//   return maxValue;
// }
// maxValeuReturn(1, 1, 7);

// function maxValeuReturn2(){
//   let maxValue = arguments[0];
//   for (value of arguments){
//     if (value > maxValue && typeof(value) === 'number') {
//       maxValue = value;
//     }
//   }
//   console.log(maxValue);
//   return maxValue;
// }
// maxValeuReturn2(1, 78, 66, '999', true);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

// function returnMinMaxValue(){
  
//   let min = arguments[0];
//   let max = arguments[0];
//   for (value of arguments){
//     if (value < min && typeof(value) === 'number'){
//       min = value;
//     }
//     if (value > max && typeof(value) === 'number'){
//       max = value;
//     }
//   }
//   console.log(max);
//   return min;
// }

// console.log(returnMinMaxValue(1,'5',2,4));

// - створити функцію яка виводить масив

// let arr = [1, 'false', 5, 34, '99', true, -66];

// function displaysArr(value){
//   (Array.isArray(value)) ? console.log(value) : console.log("It's not array");
// }

// - створити функцію яка повертає найбільше число з масиву

// function maxArrNumber(value){
//   let max = value[0];
//   if(Array.isArray(value)){
//     for (i of value){
//       if(typeof(i) === 'number' && i > max){
//         max = i;
//       }
//     }
//     return max;
//   } else {
//     let message = "It's not array";
//     return message;
//   }
// }
// console.log(maxArrNumber(arr));

// - створити функцію яка повертає найменьше число з масиву

// function minArrNumber(value){
//   let min = value[0];
//   if(Array.isArray(value)){
//     for (i of value){
//       if(typeof(i) === 'number' && i < min){
//         min = i;
//       }
//     }
//     return min;
//   } else {
//     let message = "It's not array";
//     return message;
//   }
// }
// console.log(minArrNumber(arr));

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

// let arr2 = [-5, 7, 3, 1];
// function summationElements(value){
//   let summ = null;
//   if(Array.isArray(value)){
//     for (element of value){
//       summ += element;
//     }
//   }
//   return summ;
// }
// console.log(summationElements(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arr2 = [-5, 7, 3, 1];
// function arithmeticMean(value){
//   let arMean = 0;
//   if(Array.isArray(value)){
//     for (element of value){
//       arMean += element;
//     }
//   }
//   arMean = arMean / value.length;
//   return arMean;
// }
// console.log(arithmeticMean(arr2));

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

// let cars = [
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

// let numberObject = arr => arr.length;
    
// console.log(numberObject(cars));

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

// let numberField = arr => {
//     let summ = 0;
//     for (value of arr) {
//         for(key in value){
//         summ ++}
//     }
//     return summ;
// }
// console.log(numberField(cars));

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// let arr1 = [1, 2, 3, 4];
// let arr2 = [2, 3, 4, 5];
// function summArrays(value1,value2){

//     let summArr = [];
//     for (let i = 0; i < arr1.length; i++){
//     for (let j = 0; i < arr2.length; i++){
//     summArr.push(arr1[i]+arr2[j])
//     }
// }
// return summArr;
// }
// console.log(summArrays(arr1, arr2));

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

// let addBlock = () => {
//     let div = document.createElement('div');
//     document.body.appendChild(div);
//     div.innerText = 'Hello owu';
// }
// addBlock();

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

// let addElement = (type, text) => {
//     let teg = document.createElement(type);
//     teg.innerText = text;
//     document.body.appendChild(teg);
// }

// addElement('h5', 'hello bro');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно 
// додати список цих автомобілів.

// let cars = [
//     { model: 'mazda', year: 2012, power: 2.0, color: 'red'},
//     { model: 'porche', year: 2000, power: 7.5, color: 'black'},
//     { model: 'mers', year: 1991, power: 2.5, color: 'blue'},
//     { model: 'audi', year: 1999, power: 2.0, color: 'yellow'},
//     { model: 'zaz', year: 1979, power: 0.7, color: 'white'},
//     { model: 'toyota', year: 2005, power: 2.5, color: 'grey'},
//     { model: 'lamorghini', year: 2020, power: 3.7, color: 'red'},
//     { model: 'peugeot', year: 2009, power: 1.5, color: 'green'},
//     { model: 'smart', year: 2018, power: 0.9, color: 'black'},
//     { model: 'opel', year: 2000, power: 1.9, color: 'red'}
// ];

// function addCar(value, element) {
    
//     let block = document.createElement(element);
//     document.body.appendChild(block);
//     for (i of value) {
//         block.innerHTML += i.model + ' ' + i.year + ' ' + i.power + ' ' + i.color + '<br>';
//     }
//     block.style.border = '1px red solid';
// } 
// addCar(cars, 'div');

// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. 
// Всі властивості авто в обному блоці

// function addCarInBlock (value, element){

//     let block = document.createElement(element);
//     document.body.appendChild(block);
//     for (i of value) {
//         let div = document.createElement(element);
//         block.appendChild(div);
//         div.style.border = '1px solid blue';
//         div.innerHTML += i.model + ' ' + i.year + ' ' + i.power + ' ' + i.color;
//     }
//     block.style.border = '1px red solid';

// }
// addCarInBlock(cars, 'p');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно 
// додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

// let addCarValueInBlock = (value, element) => {

//     let main = document.createElement(element);
//     document.body.appendChild(main);
//     main.style.border = '1px solid green';
//     for (i of value) {
//         let car = document.createElement('div');
//         car.style.border = '1px solid red';
//         main.appendChild(car);
//         for (key in i) {
//             let property = document.createElement('div');
//             main.appendChild(property);
//             property.style.border = '1px solid blue';
//             property.innerText = i[key];
//         }
//     }

// }
// addCarValueInBlock(cars, 'div')

// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з 
// відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:

// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

// let usersWithAddress = (value1, value2) => {

//     let usersWithCities = [];
//     for (user of value1) {
//         usersWithCities.push(user)
//         for (city of value2) {
//             if (user.id == city.user_id) {
//                 user.address = city;
//             }
//         }
//     }
//     return console.log(usersWithCities);
// }

// usersWithAddress(usersWithId, citiesWithId);


// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
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
// "

// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!

// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій

// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// ===========додаткове========