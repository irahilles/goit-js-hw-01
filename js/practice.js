// Створіть змінну з ім'ям name і присвойте їй ваше ім'я. Виведіть це ім'я в консоль.
const name = 'Iryna Hilles';
console.log(name);
// Створіть змінну age і присвойте їй ваш вік. Виведіть в консоль рядок, що містить ваш вік у такому форматі: "Мені {вік} років".
let age = 34;
console.log(`I am ${age} years old`);
// Створіть змінні x і y і присвойте їм довільні числа. Виведіть в консоль результати додавання, віднімання, множення та ділення цих чисел.
let x = 68;
let y = 475;
console.log(x+y, x-y, x*y, x/y);
// Створіть змінну city і присвойте їй назву вашого міста. Створіть рядок, який містить "Я живу в місті {назва міста}", і виведіть його в консоль.
const city = 'Lviv';
console.log(`I live in ${city}`);
// Створіть рядок з вашою електронною поштою. Використайте методи рядка, щоб витягнути ваше ім'я та доменну частину. Виведіть обидва ці значення в консоль.
let email = "irapart1607@gmail.com"
const parts = email.split('@');
const name1 = parts[0];
const domain = parts[1];
console.log(name1, domain);
// Створіть змінну price і присвойте їй число. Створіть рядок, що містить ціну з символом гривні, наприклад: "Ціна: 500 грн".
let price = 568;
let strPrice = `Price: ${price} grn`;
console.log(strPrice);
// Створіть змінну isLogged, яка має булеве значення. Виведіть в консоль повідомлення "Користувач авторизований", якщо isLogged дорівнює true, і "Користувач неавторизований", якщо isLogged дорівнює false.
 let isLogged = false;
 if (isLogged) {
    console.log("User is autorized")
 } else {
    console.log('User is unauthorized')
 }
//  Створи дві змінні firstName і lastName.Присвой їм своє ім'я та прізвище. Обєднай ці два рядки в один, з пробілом між ними. Запиши результат в змінну fullName.
// Виведи fullName в консоль.
let firstName = 'Iryna';
let lastName = 'Hilles';
let fullName = firstName + ' ' + lastName;
console.log(fullName);
// Створи дві змінні a і b, присвой їм якісь цілі числа. Виконай над ними додавання, віднімання, множення і ділення.
// Запиши результати в змінні sum, difference, product, quotient. Виведи всі ці результати в консоль.
let a = 456;
let b = 756;
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a/b;
console.log(sum, difference, product, quotient);
// Створи змінну someString і присвой їй будь-який рядок.Обчисли довжину цього рядка, використовуючи властивість .length.
// Виведи довжину рядка в консоль.
let someString = 'World is beatiful';
console.log(someString.length);
// Створи змінну someString і присвой їй будь-який рядок.
// Створи змінну firstLetter і присвой їй першу літеру рядка someString.
// Створи змінну lastLetter і присвой їй останню літеру рядка someString.
let someString1 = 'London is the capital of Great Britan';
let firstLetter = someString1[0];
let lastLetter = someString1[someString1.length - 1];
console.log(firstLetter, lastLetter);
// Створи дві змінних str1 та str2. Отримай з кожної змінної останню літеру.Створи третю змінну де обєднай попередні літери
// Приклад: для рядків "HELLO" та "WORLD" результатом буде рядок "OD"
let str12 = 'love';
let str21 = 'world';
let united = str12[str12.length - 1] + str21[str21.length - 1];
console.log(united);
// Створи змінну userValue та запиши до неї будь-яке число.
// Створи нову змінну до якої потрібно записати результат математичної операції а саме:
// userValue помножити на число 5 у степені (кількість цифр у змінній userValue).
// Приклади:
// для числа 1 = 1 * 5^1 = 5;
// для числа 2 = 2 * 5^1 = 10;
// для числа 12 = 12 * 5^2 = 300;
// для числа 512 = 512 * 5^3 = 64000;
let userValue = 111;
let turnToStr = String(userValue);
let findLen = turnToStr.length;
let result = userValue * 5 ** findLen;
console.log(result);
// Виведіть на екран загальну кількість яблок і винограду. Різницю яблока і винограду теж виведіть у консоль.
const apples = 47;
const grapes = 135;
const total = apples + grapes;
console.log(total);
const diff = apples - grapes;
console.log(diff);
// Замінити вираз перевизначення комбінованим оператором `+=`.
let students = 100;
students += 50;
console.log(students);
// Розбери пріоритет операторів в інструкції визначення значення змінної
// `result`.
const result1 = 108 + 223 - 2 * 5;
console.log(result1);
// Склади фразу за допомогою шаблонних рядків `A has B bots in stock`, де A, B -
// змінні вставлені у рядок.
const companyName = "Cyberdyne Systems";
const repairBots = 150;
const message = `${companyName} has ${repairBots} bots in stock.`;
console.log(message); // "Cyberdyne Systems has 200 bots in stock"
// Напишіть функцію яка приймає два параметри str1 та str2. 
// Функція повинна повернути булеве значення true якщо перша літера str1 дорівнює останій літері str2. 
// В іншому випадку функція повинна повернути булеве значення false.
function checkLetters (str1, str2) {
    return str1[0]==str2[str2.length - 1];
}
console.log(checkLetters('Love', 'PudeL'));
// Напишіть функцію яка приймає два параметри str1 та str2. 
// Функція повинна повернути булеве значення true якщо довжина str1 дорівнює довжині str2. 
// В іншому випадку функція повинна повернути булеве значення false.
function checkLength (str1, str2) {
    return str1.length === str2.length;
}
console.log(checkLength('Loves', 'PudeL'));

// Напишіть функцію яка приймає число num. Функція повинна повернути булеве значення true якщо кількість цифр у числі парна.
//  В іншому випадку функція повинна повернути булеве значення false.
function parneChislo (num) {
    let numQuan = String(num).length;
    return numQuan % 2 == 0;
}
console.log(parneChislo(456));
// Задача-5
// Напишіть функцію, яка приймає два параметри num1 та num2. 
// Функція повинна повернути булеве значення true, якщо num1 більше, ніж num2. 
// В іншому випадку функція повинна повернути булеве значення false.
function checkChislo (num1, num2) {
    return num1 > num2;
}
console.log(checkChislo(51,50));
// Задача-6
// Напишіть функцію, яка приймає два параметри num1 та num2. 
// Функція повинна повернути булеве значення true, якщо num1 ділиться на num2 без остачі. 
// В іншому випадку функція повинна повернути булеве значення false.
function checkOstacha (num1, num2) {
    return num1 % num2 == 0;
}
console.log(checkOstacha(50,10));
// Задача-7
// Напишіть функцію, яка приймає число num.
//  Функція повинна повернути булеве значення true, якщо num є непарним числом. 
// В іншому випадку функція повинна повернути булеве значення false.
function chechNumber (num){
    return num % 2 !== 0;
}
console.log(chechNumber(9));
// Задача-8
// Напишіть функцію, яка приймає параметр str. Функція повинна повернути булеве значення true, 
// якщо str містить принаймні одну велику літеру. В іншому випадку функція повинна повернути булеве значення false.
// Підказка: допоможе toLowerCase();
function chechUpperCase (str) {
    return str !== str.toLowerCase();
}
console.log(chechUpperCase('hello'));







