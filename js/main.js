"use strict"
let str = "Hello this is and it is the reboot";
let arr = [];
arr = str.split(' ');

let rez = [];

arr.map((value) => {
    rez.push(value[0].toUpperCase() + value.slice(1));
});

str = rez.join(' ');


console.log(rez[0].localeCompare(rez[1]));