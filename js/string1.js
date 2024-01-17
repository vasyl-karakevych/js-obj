// Створіть функцію truncate(str, maxlength), яка перевіряє довжину str і, 
// якщо вона перевищує maxlength – замінює кінець str символом трьох крапок "…", 
// щоб його довжина була рівною maxlength.

// Результатом функції повинен бути урізаний (якщо потребується) рядок.

// Наприклад:

// truncate("Що я хотів би розповісти на цю тему:", 20) = "Що я хотів би розпо…"
// truncate("Всім привіт!", 20) = "Всім привіт!"

function truncate(str, maxLength){
    return str.length < maxLength ? str : str.slice(0, maxLength-3) + '...';
}

console.log(truncate("Що я хотів би розповісти на цю тему:", 20));
console.log(truncate("Всім привіт!", 20));
console.log('********************************************');



// ************************************************************************
// У нас є вартість у вигляді "$120". Тобто: спочатку йде знак долара, а потім число.
// Створіть функцію extractCurrencyValue(str), яка витягне числове значення з такого рядка та поверне його.
// Приклад:
// alert( extractCurrencyValue('$120') === 120 ); // true
function extractCurrencyValue(str){
    return +str.slice(1);
}
console.log(extractCurrencyValue('$120') === 120);

console.log('********************************************');


//// Дано масив різних даних, вивесит інформацію про те що це за дані стрічка чи число 
//
//
let arr = ['Rembo', 'Bob', 5, NaN, undefined, 99999999];
console.log(arr.toString());

arr.map((value) => {
    if (isFinite(value)) console.log(`${value} = Number`);
    else if (typeof value == 'string') console.log(`${value} = String`);
    else if (typeof value == 'undefined') console.log(`${value} = undefined`);
    else console.log(`${value} = error`);
});
console.log('*****');


// 2й варіант не працює на Nan
arr.forEach((element) => {
    let rez = 'error';
    switch (typeof element) {
        case 'number': 
            rez = 'Number';
            break;
        case 'string': 
            rez = 'String';
            break;
        case 'undefined': 
            rez = 'undefined';
            break;
        default: rez = 'error';
    }
    console.log(`${element} = ${typeof element}`);
});
console.log('*****');


// 3й варіант не працює на Nan
arr.forEach((element) => {
    console.log(`${element} = ${typeof element}`);
});

console.log('********************************************');

////////////////////////////////////////////////////////////////////////
// 






