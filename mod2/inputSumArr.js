let userInput;
const numbers = [];
let total = 0;

do {
    userInput = prompt('enter number');
    if ((userInput % 1) !== 0 || userInput === '' || userInput === ' ' ){
        alert('error! you must enter number');
    } else if (userInput === null){
        alert('please come again');
        break
    }
    else {
        numbers.push(userInput);
    } 
} while (userInput !== null); 
console.log(numbers);


if (numbers.length > 0){
    
    console.log(numbers);
    
    for (const value of numbers){
        total += Number(value);
    }
} else {
    alert('you dont enter any numbers');
}
alert(`sum of your entered numbers is ${total}`);



