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

            // let calculator = {
            //     read() {
            //         this.a = +prompt('Enter the a');
            //         this.b = +prompt('Enter th b');
            //     },

            //     sum() { return this.a + this.b; },
            //     mul() { return this.a * this.b; }
            // };

            // calculator.read();
            // alert(calculator.sum());
            // alert(calculator.mul());


// Створіть функцію-конструктор Calculator, яка створює «розширюваний» обʼєкт калькулятора.
// Завдання складається з двох частин.

// По-перше, реалізуйте метод calculator(str), який приймає рядок типу "1 + 2" в форматі 
// «ЧИСЛО оператор ЧИСЛО» (розділені пробілами) і повертає результат. М
// етод повинен розуміти плюс + і мінус -.

// Приклад використання:

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10
// Потім додайте метод addMethod(name, func), який додає в калькулятор нові операції. 
// Він приймає оператор name і функцію з двома аргументами func(a, b), яка описує його.

// Наприклад, давайте додамо множення *, ділення / і зведення в ступінь **:

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// Для цього завдання не потрібні дужки або складні вирази.
// Числа і оператор розділені рівно одним пропуском.
// Не зайвим буде додати обробку помилок.

