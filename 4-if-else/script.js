"use strict";


let answer = prompt("Кокое официальное название JavaScript?", "");
if (answer == "ECMAScript") {
    alert("Верно!");
} else {
    alert("Не знаете? \"ECMAScript\"!");
}

let number = Number(prompt("Введите число:", ""));
if (number > 0) {
    alert(1);
} else if (number < 0) {
    alert(-1);
} else {
    alert(0);
}
