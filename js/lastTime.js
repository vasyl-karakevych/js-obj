// Напишіть функцію, яка отримує 4 цифри та повертає останній час доби, яку можна побудувати з цими цифрами.
// Час має бути у HH:MM форматі.
// приклади:
// digits: 1, 9, 8, 3 => result: "19:38"
// digits: 9, 1, 2, 5 => result: "21:59" ("19:25" is also a valid time, but 21:59 is later)
// Примітки
// Результат має бути дійсним за 24 години між 00:00 та 23:59.
// Перевіряються лише вхідні дані, які мають дійсні відповіді.

function getLastTime(num1, num2, num3, num4) {
    // перевіряємо чи усі дані є числа
    if (isFinite(num1) && isFinite(num1) && isFinite(num1) && isFinite(num1)){
        arr = [num1, num2, num3, num4]; // створюємо масив із цих чисел
        arrTime = [-1,-1,-1,-1];  // створюємо масив який буде кінцевим при формуванні часу
        let indexDel = 0; //індекс потрібний для того щоб знати який елемент масиву використаний і видалити

        // step 1, шукаємо першу цифру години
        arr.map((value, index) => {
            if (value > arrTime[0] && value <= 2) {
                arrTime[0] = value; //шукаємо максимальне значення
                indexDel = index;
            }
        });
        arr.splice(indexDel,1); // видаляємо елемент який ми використали
        
        // step 2
        indexDel = 0;
        arr.map( (value, index) => {
            if ( (value > arrTime[1] && arrTime[0] == 2 && value <= 4)
                || (value > arrTime[1] && arrTime[0] < 2 && value <= 9) ) {
                arrTime[1] = value; 
                indexDel = index;
            }
        });
        arr.splice(indexDel,1);  

        // step 3
        indexDel = 0;
        arr.map( (value, index) => {
            if (value > arrTime[2] && value <= 5) {
                arrTime[2] = value; 
                indexDel = index;
            }
        });
        arr.splice(indexDel,1); 

        // step 4
        indexDel = 0;
        if (arr[0] <= 9 ) arrTime[3] = arr[0]; 

        ////////////// перевіряємо чи знайшлися потрібні нам цифри
        if (arrTime[0] == -1 || arrTime[1] == -1 || arrTime[2] == -1 || arrTime[3] == -1)
            console.log('Error, enter the correct Number');
        else
            console.log(`${arrTime[0]}${arrTime[1]}:${arrTime[2]}${arrTime[3]}`);
    }
    else console.log('Error, enter the correct data');
    }

console.log('1,9,2,3');
getLastTime(1,9,2,3);
console.log('\n');

console.log('9, 1, 2, 5');
getLastTime(9,1,2,5);
console.log('\n');

console.log('3,0,2,0');
getLastTime(3,0,2,0);
console.log('\n');

console.log('1,9,9,9');
getLastTime(1,9,9,9);
console.log('\n');