function getElementWidth(content, padding, border) {
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding) * 2; 
    const borderWidth = parseFloat(border) * 2; 
    return contentWidth + paddingWidth + borderWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200


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

 