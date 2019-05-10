function sumTwoSmallestNumbers(numbers) {
    const findSmalest = (a, b) => a - b;
    const sorted = numbers.sort(findSmalest).slice(0, 2);
    const sum = sorted.reduce((acc, num) => acc += num, 0);
    return sum;
  };

  sumTwoSmallestNumbers([1, 6, 3, 7, 4]);

// ================================================================
function spinWords(str){
    const splitStr = str.split(' ');
    
    splitStr.forEach(function(word, idx) {
        if (word.length >= 5) {
            splitStr[idx] = word.split('').reverse().join('');
        }
    })
    console.log(splitStr);
    
    return console.log(splitStr.join(' '));
}
spinWords("what the fucking string is this anyway");
// ================================================================
function descendingOrder(n){
    if (n < 0) { return console.log('negative number') };
    n = String(n).split('').map(Number).sort((a, b) => b - a).join('');
    const descendingNum = +n;
    return descendingNum;
}

descendingOrder(9182734912340);
// ================================================================
function isIsogram(str){
    let arr = str.toLowerCase().split('');
    let arrIsogram = [];
    
    arr.filter(function(elem, idx){
        if(arr.indexOf(elem) === idx){
            arrIsogram.push(elem);
        }
    });
    return arrIsogram.join('') === arr.join('') ? true : false
}
isIsogram('122');
// ================================================================
function abbrevName(name){
    console.log(name);
    return name.toUpperCase()
    .split(' ')
    .map(x => x[0])    
    .join('.');
}

console.log(abbrevName('john dou'));

// ================================================================