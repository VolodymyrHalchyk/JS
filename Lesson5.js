// ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  let Href = new Attrs('href', 'Задает адрес документа, на который следует перейти') 
//  Таким чином описати теги
//  -a

// function Tag (name, action, atrr) {
//     this.titleOfTag = name;
//     this.action = action;
//     this.atrr = atrr;
// }

// let nameA = '<a>';
// let actionA = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок';
// let atrrA = [
//     { titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти.' },
//     { titleOfAttr: 'name', actionOfAttr: 'Устанавливает имя якоря внутри документа.' }

// ];

// let a = new Tag(nameA, actionA, atrrA);
// console.log(a);

// //  -div

// let nameDiv = '<div>';
// let actionDiv = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.'
// let atrrDiv = [
//     { titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>' },
//     { titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.' }
// ];

// let div = new Tag(nameDiv, actionDiv, atrrDiv);
// console.log(div);

// //  -h1

// let nameH1 = '<h1>';
// let actionH1 = 'По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше.'
// let atrrH1 = [
//     { titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.' },
//     { titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.' }
// ];

// let h1 = new Tag(nameH1, actionH1, atrrH1);
// console.log(h1);

// //  -span

// let nameSpan = '<span>';
// let actionSpan = 'Тег <span> предназначен для определения строчных элементов документа.';
// let atrrSpan = [
//     { titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.' },
//     { titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.' }
// ];

// let span = new Tag(nameSpan, actionSpan, atrrSpan);
// console.log(span);


//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================


// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input

// class Tag {
//     constructor(name, action, atrr) {
//         this.name = name;
//         this.action = action;
//         this.atrr = atrr;
//     }
// }

// let nameInput = '<input>';
// let actionInput = 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.';
// let atrrInput = [
//     { titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.' },
//     { titleOfAttr: 'accesskey', actionOfAttr: 'Переход к элементу с помощью комбинации клавиш.' }
// ];

// let input = new Tag(nameInput, actionInput, atrrInput);
// console.log(input);

// //  -form

// let nameForm = '<form>';
// let actionForm = 'Тег <form> устанавливает форму на веб-странице.';
// let atrrForm = [
//     { titleOfAttr: 'target', actionOfAttr: 'Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.' },
//     { titleOfAttr: 'novalidate', actionOfAttr: 'Отменяет встроенную проверку данных формы на корректность ввода.' }
// ];

// let form = new Tag(nameForm, actionForm, atrrForm);
// console.log(form);

// //  -option

// let nameOption = '<option>';
// let actionOption = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.';
// let atrrOption = [
//     { titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.' },
//     { titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.' }
// ];

// let option = new Tag(nameOption, actionOption, atrrOption);
// console.log(option);

// //  -select

// let nameSelect = '<select>';
// let actionSelect = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.';
// let atrrSelect = [
//     { titleOfAttr: 'multiple', actionOfAttr: 'Позволяет одновременно выбирать сразу несколько элементов списка.' },
//     { titleOfAttr: 'required', actionOfAttr: 'Список обязателен для выбора перед отправкой формы.' }
// ];

// let select = new Tag(nameSelect, actionSelect, atrrSelect);
// console.log(select);


//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================



// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. 
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// let car = {
//     model: 'Toyota',
//     made: 'Japan',
//     year: 2015,
//     maxSpeed: 200,
//     capacity: 2.0,
//     drive: function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     },
//     info: function () {
//         let message = `
//          model : ${this.model}
//          made : ${this.made}
//          year : ${this.year} 
//          max speed : ${this.maxSpeed}
//          capacity : ${this.capacity}`;
//         return message;
//     },
//     increaseMaxSpeed: function (newSpeed) {
//         this.maxSpeed += newSpeed;
//         return this.maxSpeed;
//     },
//     changeYear: function (newValue) {
//         this.year = newValue;
//         return this.year;
//     },
//     chauffeur: function (driver) {
//         this.driver = driver;
//         return this.driver;
//     }


// };
// let driver = [{name : 'Ivan', age: 25, exp: 7}]
// car.drive();
// console.log(car.info());
// console.log(car);
// console.log(car.increaseMaxSpeed(10));
// console.log(car);
// console.log(car.changeYear(2020));
// console.log(car);
// car.chauffeur(driver);
// console.log(car);
// // ==============================================


// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function Car(model, made, year, maxSpeed, capacity) {
//     this.model = model;
//     this.made = made;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.capacity = capacity;
    
//     this.drive = function dri() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
    
//     this.info = function inf() {
//         let div = document.createElement('div');
//         div.innerHTML = `model : ${this.model} <br>
//          made : ${this.made} <br> 
//          year : ${this.year} <br> 
//          max speed : ${this.maxSpeed} <br>
//          capacity : ${this.capacity}`
//         document.body.appendChild(div);
//     }

//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//         return this.maxSpeed
//     }

//     this.changeYear = function (newValue) {
//         this.year = newValue;
//         return this.year;
//     }
//     this.chauffeur = function (driver) {
//         this.driver = driver;
//         return this.driver;
//     }
// }
// let car = new Car('Toyota', 'Japan', 2015, 200, 2.0);
// let driver = [{name : 'Vahtang', age: 33}]

// car.drive();
// console.log(car);
// console.log(car.increaseMaxSpeed(10));
// console.log(car);
// console.log(car.changeYear(2020));
// console.log(car);
// console.log(car.chauffeur(driver));
// console.log(car);

// ==============================================

// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class Car {
//     constructor(model, made, year, maxSpeed, capacity){
    
//     this.model = model;
//     this.made = made;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.capacity = capacity;
    
//     }

//     drive = function message() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
    
//     info = function inf() {
//         let information = `
//          model : ${this.model}
//          made : ${this.made}
//          year : ${this.year} 
//          max speed : ${this.maxSpeed}
//          capacity : ${this.capacity}`;
//         return information;
//     }

//     increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//         return this.maxSpeed
//     }

//     changeYear = function (newValue) {
//         this.year = newValue;
//         return this.year;
//     }
    
//     chauffeur = function (driver) {
//         this.driver = driver;
//         return this.driver;
//     }

// }

// let car = new Car('Toyota', 'Japan', 2015, 200, 2.0);
// let driver = [{name : 'Vahtang', age: 33}]

// car.drive();
// console.log(car.info());
// console.log(car.increaseMaxSpeed(10));
// console.log(car);
// console.log(car.changeYear(2020));
// console.log(car);
// console.log(car.chauffeur(driver));
// console.log(car);

// ==============================================


// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

// class Cinderella {
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }

// class Prince {
//     constructor(name, age, shoes) {
//         this.name = name;
//         this.age = age;
//         this.shoes = shoes;
//     }
// }
// let princesses = [];
// princesses.push(new Cinderella('Katya', 21, 31));
// princesses.push(new Cinderella('Olya' , 22, 32));
// princesses.push(new Cinderella('Anna', 23, 33));
// princesses.push(new Cinderella('Vika', 24, 34));
// princesses.push(new Cinderella('Raya', 25, 35));
// princesses.push(new Cinderella('Frosya', 26, 36));
// princesses.push(new Cinderella('Malanka', 27, 37));
// princesses.push(new Cinderella('Sasha', 28, 38));
// princesses.push(new Cinderella('Nadya', 29, 39));
// princesses.push(new Cinderella('Motomoto', 30, 47));
// console.log(princesses);

// let miniKing = new Prince('Joffrey', 15, 35);

// for (value of princesses) {
//     if (value.size == miniKing.shoes) {
//         console.log(`${value.name} and ${miniKing.name} just get married`);
//     }
// }

// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

// let princesses = [];
// princesses.push(new Cinderella('Katya', 21, 31));
// princesses.push(new Cinderella('Olya' , 22, 32));
// princesses.push(new Cinderella('Anna', 23, 33));
// princesses.push(new Cinderella('Vika', 24, 34));
// princesses.push(new Cinderella('Raya', 25, 35));
// princesses.push(new Cinderella('Frosya', 26, 36));
// princesses.push(new Cinderella('Malanka', 27, 37));
// princesses.push(new Cinderella('Sasha', 28, 38));
// princesses.push(new Cinderella('Nadya', 29, 39));
// princesses.push(new Cinderella('Motomoto', 30, 47));
// console.log(princesses);

// function Cinderella(name, age, size) {
//     this.name = name;
//     this.age = age;
//     this.size = size;
// } 

// function Prince(name, age, shoes) {
//     this.name = name;
//     this.age = age;
//     this.shoes = shoes;

//     this.searchPrincess = function searc(arr){
//         for (value of arr) {
//             if (value.size == this.shoes) {
//                 return console.log(`${value.name} and ${miniKing.name} just get married`);
//             }
//          }
//     }
    
// }

// let miniKing = new Prince('Joffrey', 15, 47);
// miniKing.searchPrincess(princesses);
