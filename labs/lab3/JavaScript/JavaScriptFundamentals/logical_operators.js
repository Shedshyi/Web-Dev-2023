// What's the result of OR?
alert( null || 2 || undefined ); // 2

// What's the result of OR'ed alerts?
alert( alert(1) || 2 || alert(3) ); // 1st output : 1     2nd output : 2

// What is the result of AND?
alert( 1 && null && 2 ); // null

// What is the result of AND'ed alerts?
alert( alert(1) && alert(2) ); // 1st output : 1      2nd output: undefined

// The result of OR AND OR
alert( null || 2 && 3 || 4 ); // 3

// Check the range between
// Write an if condition to check that age is between 14 and 90 inclusively.
if(14 <= age && age <= 90);

// Check the range outside
// Write an if condition to check that age is NOT between 14 and 90 inclusively.
if (!(age >= 14 && age <= 90));

// A question about "if"
// Which of these alerts are going to execute?
if (-1 || 0) alert( 'first' ); // execute
if (-1 && 0) alert( 'second' ); // dont execute
if (null || -1 && 1) alert( 'third' ); // execute