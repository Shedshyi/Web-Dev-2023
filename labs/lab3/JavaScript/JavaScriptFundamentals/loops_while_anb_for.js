// Last loop value
// What is the last value alerted by this code? Why?
let i = 3;
while (i) {
    alert( i-- );
} // last alert : 1

//-------------------------------------------------------------------------------------------------------------------------------------


// Which values does the while loop show?
// For every loop iteration, write down which value it outputs and then compare it with the solution.
// The prefix form ++i:
let i = 0;
while (++i < 5) alert( i ); // 1 2 3 4
// The postfix form i++
let i = 0;
while (i++ < 5) alert( i ); // 1 2 3 4 5

//-------------------------------------------------------------------------------------------------------------------------------------


// Which values get shown by the "for" loop?
// For each loop write down which values it is going to show. Then compare with the answer.
// The postfix form:
for (let i = 0; i < 5; i++) alert( i ); // 0 1 2 3 4
// The prefix form:
for (let i = 0; i < 5; ++i) alert( i ); // 0 1 2 3 4

//-------------------------------------------------------------------------------------------------------------------------------------


// Output even numbers in the loop
// Use the for loop to output even numbers from 2 to 10.
for(let i = 2 ; i <= 10; i+=2) alert(i);

//-------------------------------------------------------------------------------------------------------------------------------------


// Replace "for" with "while"
// Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).
for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
}

let i = 0;
while(i < 3){
    alert( `number ${i}!` );
    i++;
}

//-------------------------------------------------------------------------------------------------------------------------------------


// Repeat until the input is correct
// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
// Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.
do {
    number = prompt("Enter a number greater than 100?", 0);
}while(number <= 100 && number)

//-------------------------------------------------------------------------------------------------------------------------------------



// Output prime numbers
number = prompt('Enter number: ')
for (let i = 2; i < number; i++){
    for(let j = 2; j < number** (1/2); j++){
        if(i % j == 0)alert(i);
    }
}
