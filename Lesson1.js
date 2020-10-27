// - присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14,
// 2.7, 16, true, false Вывести каждую при помощи console.log, alert, document.write

// let q = 'hello';
// let w = 'owu';
// let e = 'com';
// let r = 'ua';
// let t = 1;
// let y = 10;
// let u = -999;
// let i = 123;
// let o = 3.14;
// let p = 2.7;
// let a = 16;
// let s = true;
// let d = false;
// console.log(q);
// console.log(w);
// console.log(e);
// console.log(r);
// console.log(t);
// console.log(y);
// console.log(u);
// console.log(i);
// console.log(o);
// console.log(p);
// console.log(a);
// console.log(s);
// console.log(d);
// alert(q);
// alert(w);
// alert(e);
// alert(r);
// alert(t);
// alert(y);
// alert(u);
// alert(i);
// alert(o);
// alert(p);
// alert(a);
// alert(s);
// alert(d);
// document.write(q+'<br>');
// document.write(w+'<br>');
// document.write(e+'<br>');
// document.write(r+'<br>');
// document.write(t+'<br>');
// document.write(y+'<br>');
// document.write(u+'<br>');
// document.write(i+'<br>');
// document.write(o+'<br>');
// document.write(p+'<br>');
// document.write(a+'<br>');
// document.write(s+'<br>');
// document.write(d+'<br>'+'<br>');

// - переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write

// q = 1;
// w = 2;
// e = 3.55;
// r = 'cat';
// t = 'good';
// y = 'for';
// u = 'you';
// i = true;
// o = false;
// p = -123;
// a = 44.44;
// s = 'red';
// d = 'false';
// console.log(q);
// console.log(w);
// console.log(e);
// console.log(r);
// console.log(t);
// console.log(y);
// console.log(u);
// console.log(i);
// console.log(o);
// console.log(p);
// console.log(a);
// console.log(s);
// console.log(d);
// alert(q);
// alert(w);
// alert(e);
// alert(r);
// alert(t);
// alert(y);
// alert(u);
// alert(i);
// alert(o);
// alert(p);
// alert(a);
// alert(s);
// alert(d);
// document.write(q+'<br>');
// document.write(w+'<br>');
// document.write(e+'<br>');
// document.write(r+'<br>');
// document.write(t+'<br>');
// document.write(y+'<br>');
// document.write(u+'<br>');
// document.write(i+'<br>');
// document.write(o+'<br>');
// document.write(p+'<br>');
// document.write(a+'<br>');
// document.write(s+'<br>');
// document.write(d+'<br>'+'<br>');

// - Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write

// const z = 12345;
// const x = 37.15;
// const c = -15.55;
// const v = 'return';
// const b = 'some';
// const n = 'value';
// console.log(z);
// console.log(x);
// console.log(c);
// console.log(v);
// console.log(b);
// console.log(n);
// document.write(z+'<br>');
// document.write(x+'<br>');
// document.write(c+'<br>');
// document.write(v+'<br>');
// document.write(b+'<br>');
// document.write(n+'<br>'+'<br>');

// - при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write

// let soname = prompt('Soname?');
// let name = prompt('Name?');
// let patronym = prompt('Patronym?');
// console.log((soname) + ' ' + (name) + ' ' + patronym);
// document.write((soname) + ' ' + (name) + ' ' + patronym + '<br>');
// alert((soname) + ' ' + (name) + ' ' + patronym);



// - Взять переменные из задания 4 и сконкатенировать их в одной переменной person.

// let person = soname + name + patronym;
// document.write(person);

// - Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.

// let sister;
// let sisterSoname = prompt('Sister soname?');
// let sisterName = prompt('Sister name?');
// let sisterPatronym = prompt('Sister patronym?');
// sister = sisterSoname + sisterName + sisterPatronym;
// let mom;
// let momSoname = prompt('Mom soname');
// let momName = prompt('Mom name');
// let momPatronym = prompt('Mom patronym');
// mom = momSoname + momName + momPatronym;

// - при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.

// let firstNumber = +prompt('Number 1?');
// let secondNumber = +prompt('Number 3?');
// let thirdNumber = +prompt('Number 3?');
// console.log(firstNumber, secondNumber, thirdNumber)


// - при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера

// let firstNumber = parseInt(prompt('Number 1?'));
// let secondNumber = parseInt(prompt('Numer 2?'));
// let thirdNumber = parseInt(prompt('Number 3?'));
// let fourthNumber = parseInt(prompt('Number 4?'));
// let result = firstNumber + secondNumber + thirdNumber + fourthNumber;
// console.log(result); 


// - при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера

// let firstNumber = parseFloat(prompt('Number 1?'));
// let secondNumber = parseFloat(prompt('Number 2?'));
// let thirdNumber = parseFloat(prompt('Number 3?'));
// let result = firstNumber + secondNumber + thirdNumber;
// console.log(result);    


// - при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера

// let firstNumber = Math.round(prompt('Number 1?'));
// let secondNumber = Math.round(prompt('Number 2?'));
// let thirdNumber = Math.round(prompt('Number 3?'));
// let result = firstNumber + secondNumber + thirdNumber;
// console.log(result);  

// - при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.

// let firstNumber = +prompt('Number 1?');
// let secondNumber = +prompt('Number 2?');
// let result = Math.pow(firstNumber, secondNumber);
// console.log(result);

// - При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль 
// let a = 100; let b = '100'; let c = true; let d = undefined;

// let a = 100;
// let b = '100';
// let c = true;
// let d = undefined;
// console.log(typeof (a), typeof (b), typeof (c), typeof (d));

// - Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
//  В одинаковых выражениях в задании не использовать два одинаковых оператора.
// Каждое выражение вложить в свою переменную
//     5 > 6 -> true
//     5 < 6 -> false
//     5 <= 6 -> false
//     5 == 6 -> false
//     10 == 10 -> true
//     10 >= 10 -> true
//     10 < 10 -> false
//     10 !== 10 -> false
//     10 > 10 -> false
//     123 === '123' -> false
//     123 == '123' -> true

// Дополнительно:
// - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
                // +            -
// console.log(132 > 100 && 45 < 12 ); false
//                 +         +
// console.log(34 > 33 && 23 < 90 ); true
//                -           +
// console.log(99 > 100 && 45 > 12 ); false
//                  +       не важливо
// console.log(132 > 100 || 45 < 12 ); true
//                 +        не важливо 
// console.log(111 > 11 || 45 < 111 ); true
//                  +        не важливо       +       не важливо 
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); true
//                  +       не важливо   не важливо  не важливо
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); true
//                  +           -              +            -   
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); false
                //  +       не важливо  не важливо  не важливо
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); true
//              стрінга
// console.log(!!'-1'); true
//              ціле число
// console.log(!!-1); true
//              стрінга
// console.log(!!'0'); true
//              стрінга
// console.log(!!'null'); true
//              стрінга
// console.log(!!'undefined'); true
//              невірний запис
// console.log(!!(3/'owu')); false
//                  +       не важливо    не важливо       
// console.log((111 > 11 || 45 < 111) ||  !!'0'); true
//                     +        не важливо        -      -    +
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); false