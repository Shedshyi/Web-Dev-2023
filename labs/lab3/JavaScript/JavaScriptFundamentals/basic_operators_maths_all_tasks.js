// The postfix and prefix forms
let a, b = 1;

let c = ++a; // 2
let d = b++; // 1

// Assignment result
let a = 2;

let x = 1 + (a *= 2); // a = 4, x = 5

// Type conversation
"" + 1 + 0 // "10"
"" - 1 + 0 // -1
true + false // true->1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // "9px"
"$" + 4 + 5 // "$45"
"4" - 2 // 2
"4px" - 2 // nan
"  -9  " + 5 // "  -9   5"
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // nan
" \t \n" - 2 // -2

// Fix the addition
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12

let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(Number(a) + b); // 3