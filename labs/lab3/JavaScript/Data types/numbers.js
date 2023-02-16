// Sum numbers from the visitor
let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

alert( a + b );

// Why 6.35.toFixed(1) == 6.3?
alert( Math.round(6.35 * 10) / 10 );

// Repeat until the input is a number
function readNumber() {
    let num;

    do {
        num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );

    if (num === null || num === '') return null;

    return +num;
}

alert(`Read: ${readNumber()}`);

// An occasional infinite loop
let i = 0;
while (i < 11) {
    i += 0.2;
    if (i > 9.8 && i < 10.2) alert( i );
}

// A random number from min to max
function random(min, max) {
    return min + Math.random() * (max - min);
}

// A random integer from min to max
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}