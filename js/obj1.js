"use strict"
// Створіть об’єкт calculator з трьома методами:

// read() запитує два значення та зберігає їх як властивості об’єкта з іменами a та b відповідно.
// sum() повертає суму збережених значень.
// mul() множить збережені значення і повертає результат.
// let calculator = {
//   // ... ваш код ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );


























let calculator = {
    read() {
        this.a = +prompt('Enter the a');
        this.b = +prompt('Enter th b');
    },

    sum() { return this.a + this.b; },
    mul() { return this.a * this.b; }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());