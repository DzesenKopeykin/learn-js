"use strict";


let is_confirmed = false;
let user_name;

while (!is_confirmed) {
    user_name = prompt("Enter your name:", "");
    if (user_name !== null) {
        is_confirmed = confirm(`Confirm your name ${user_name}`);
    };
};

alert(`Your name: ${user_name}`);
