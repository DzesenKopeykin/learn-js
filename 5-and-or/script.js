"use strict";


const ADMIN_NAME = "admin";
const ADMIN_PASSWORD = "admin";

let username = prompt("Username:", "");
if (username === "" || username === null) {
    alert("Canceled");
} else if (username !== ADMIN_NAME) {
    alert("I don't know you");
} else {
    let password = prompt("Password:", "");
    if (password === "" || username === null) {
        alert("Canceled");
    } else if (password !== ADMIN_PASSWORD) {
        alert("Wrong password");
    } else {
        alert("Hello Admin!");
    }
}
