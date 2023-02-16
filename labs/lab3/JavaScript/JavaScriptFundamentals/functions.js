// Is "else" required?
// The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result:
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm('Did parents allow you?');
    }
}
// Will the function work differently if else is removed?
function checkAge(age) {
    if (age > 18) {
        return true;
    }
    // ...
    return confirm('Did parents allow you?');
}
// Is there any difference in the behavior of these two variants?
// no difference


//-------------------------------------------------------------------------------------------------------------------------------------


// Rewrite the function using '?' or '||'
// The following function returns true if the parameter age is greater than 18.
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Did parents allow you?');
    }
}
// Rewrite it, to perform the same, but without if, in a single line.
// Using a question mark operator ?
function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}
// Using OR ||
function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}


//-------------------------------------------------------------------------------------------------------------------------------------


// Function min(a, b)
function min(a,b){
    return (a > b) ? a : b;
}

//-------------------------------------------------------------------------------------------------------------------------------------

// Function pow(x,n)
function pow(x,n){
    for (let i = 0; i <= n; i++)x*=x;
    return x;
}