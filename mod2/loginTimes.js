'use strict'
const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;
let counts = 0;
let i = attempts - 1;
do {
    let userInput = prompt('enter password');
    if (passwords.includes(userInput) === true){
        alert('welcome');
        break;
    }
    else if (userInput === null){
        break;
    }
    else if (counts === 2) {
        alert(`u have no attempts left`);
        break;
    }
    else {
        alert(`u have ${i--} attempts left`);
    }
    counts++;
} while (attempts >= counts);