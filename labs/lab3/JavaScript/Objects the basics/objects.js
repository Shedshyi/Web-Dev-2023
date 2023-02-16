// Hello, object
let user = {
    name : "John",
    surname : "Smith",
}

user.name = "Pete";
delete user.name;

// Check for emptiness
function isEmpty(o){
    for(let key in o){
        return false;
    }
    return true;
}

// Sum object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
function sumSalary(salaries) {
    let sum = 0;

    for (let key in salaries) {
        sum += salaries[key];
    }
    return sum;
}

// Multiply numeric property values by 2
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(menu){
    for (let key in menu){
        if(typeof(key) == "number"){
            menu[key] *= 2;
        }
    }
    return menu;
}