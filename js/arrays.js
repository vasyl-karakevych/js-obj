function lastPossibleTime(digits) {
    digits.sort((a, b) => b - a); // Сортуємо цифри в зворотньому порядку
  
    // Перевіряємо можливі комбінації годин та хвилин
    for (let h1 of digits) {
      for (let h2 of digits) {
        for (let m1 of digits) {
          for (let m2 of digits) {
            const hours = h1 * 10 + h2;
            const minutes = m1 * 10 + m2;
            // Перевіряємо, чи отримані години та хвилини входять в допустимий діапазон
            if (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59) {
              return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
            }
          }
        }
      }
    }
  
    return "Неможливо побудувати час";
  }
  
  // Приклад використання:
  let users = [
    {id: 1, name: "John", age: 10},
    {id: 2, name: "Pete", age: 5},
    {id: 3, name: "Mary", age: 20},
    {id: 3, name: "Bob", age: 1}
  ];
 
  users = users.sort((a,b) => a.age -b.age);
  console.log(users);