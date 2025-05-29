// 1
const text1 = " ";
const text2 = " ";

if(text1 && text2) {
    alert("Обидва поля заповнені");
} else {
    alert("Не всі поля заповнені");
}

// 2
const num1 = 5;
const num2 = 5;

if(num1 + num2 > 10) {
    alert("Сума більша за 10");
} else {
    alert("Сума менша або дорівнює 10");
}

// 3
const text3 = "JavaScript";

if(text3.includes("JavaScript")) {
    alert("Текст містить слово JavaScript");
} else {
    alert("Текст не містить слово JavaScript");
}

// 4
const num3 = 12;

if(num3 >= 10 && num3 <= 20) {
    alert("Число входить в діапазон від 10 до 20");
} else {
    alert("Число не входить в діапазон від 10 до 20");
}

// 5
const name = prompt("Ведіть ваше ім'я");
const email = prompt("Ведіть ваш емейл");
const password = prompt("Ведіть ваш пароль");

if(name.length >= 3 &&
    email.includes("@") && 
    email.includes(".") && 
    email.indexOf(".") > email.indexOf("@") && 
    password.length >= 6) {
    alert("Перенаправлення на іншу сторінку")
} else {
    alert("Помилка: неправильне заповнення")
}
