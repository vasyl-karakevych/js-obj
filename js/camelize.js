// Переведіть текст виду border-left-width в borderLeftWidth
// важливість: 5
// Напишіть функцію camelize(str), яка перетворює такі рядки “my-short-string” в “myShortString”.

// Тобто дефіси видаляються, а всі слова після них починаються з великої літери.

// Приклади:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

const camelize = (str) => {
    let arr = str.split('-');
    arr = arr.map(value => value = value[0].toUpperCase() + value.slice(1));
    return arr.join('');
}

console.log(camelize("list-style-image"));
