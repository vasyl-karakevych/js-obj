// Напишіть функцію filterRangeInPlace(arr, a, b), яка приймає масив arr і видаляє з нього всі значення крім 
// тих, які знаходяться між a і b. Тобто, перевірка має вигляд a ≤ arr[i] ≤ b.
// Функція повинна змінювати поточний масив і нічого не повертати.
// Наприклад:

// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // видаляє всі числа крім тих, що в діапазоні від 1 до 4
// alert( arr ); // [3, 1]

function filterRangeInPlace(arr, a, b){
    for (let i=0; i<arr.length; i++)
        if (arr[i] <= a || arr[i] >= b )
            arr.splice(i,1);
    return arr;
}

let arr = [5, 3, 8, 1];
console.log(filterRangeInPlace(arr , 1, 4));