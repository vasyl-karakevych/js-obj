// Напишіть функцію filterRange(arr, a, b), яка приймає масив arr, шукає в ньому елементи більші-рівні a та менші-рівні b і віддає масив цих елементів.
// Функція повинна повертати новий масив і не змінювати вихідний.
// Наприклад:

// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert( filtered ); // 3,1 (відфільтровані значення)
// alert( arr ); // 5,3,8,1 (не змінюється)

const filterRange = (arr, a, b) => {
    return arr.filter(value => value>=a && value<b);
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered);