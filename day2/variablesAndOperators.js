// Starter Task 1

//console.log("All Around the World"[7].toUpperCase());

// Task 2

//let i = 10;
//console.log(i);
//i += 2;
//console.log(i);

// Task 3

//let name = "Tom";
//let age = 19;
//let favouriteDrink = "Fanta";
//console.log("Hi, my name is " + name + ". I am " + age + " and my favourite drink is " + favouriteDrink + ".");
//console.log(`Hi, my name is ${name}. I am ${age} and my favourite drink is ${favouriteDrink}`);

// Activity 1:

// Sets up user input (note: uses package):
//const prompt = require('prompt-sync')();
// Variable initialization and declaration:
//let name = prompt("Enter your name: ");
//let age = prompt("Enter your age: ");
//let favouriteColour = prompt("Enter your favourite colour: ");
//console.log(`You said: your name is ${name}, your age is ${age} and your favourite colour is ${favouriteColour}.`);
//name = prompt("Enter your updated name: ");
//age = prompt("Enter your updated age: ");
//favouriteColour = prompt("Enter your updated favourite colour: ");
//console.log(`You said: your name is ${name}, your age is ${age} and your favourite colour is ${favouriteColour}.`);

// Activity 2:

//Sets up user input (note: uses package):
//const prompt = require('prompt-sync')();
//Variable initialization and declaration:
//let breakfast = prompt("Enter your breakfast today: ");
//let lunch = prompt("Enter your lunch today: ");
//let dinner = prompt("Enter your dinner today: ");
//console.log(`Breakfast today: ${breakfast}. Lunch today: ${lunch}. Dinner today: ${dinner}.`);
//breakfast = prompt("Enter your tomorrow's breakfast: ");
//lunch = prompt("Enter your lunch tomorrow's lunch: ");
//dinner = prompt("Enter your tomorrow's dinner: ");
//console.log(`Breakfast tomorrow: ${breakfast}. Lunch tomorrow: ${lunch}. Dinner tomorrow: ${dinner}.`);

// Activity 3:

//Sets up user input (note: uses package):
/*const prompt = require('prompt-sync')();
//Variable initialization and declaration:
function validateInput(message, len, lowerBoundary, upperBoundary){
    dataValid = false;
    while (!dataValid){
        data = prompt(message);
        // Input must meet the criteria set below - all expressions must evaluate to 'true':
        if ((data.length == len) && (Number.isInteger(Number(data))) && (Number(data) > lowerBoundary) && (Number(data) < upperBoundary)){
            dataValid = true;
            console.log("Success!")
        }
        else {
            console.log("Data does not meet the requirements; enter again!");
        }
    }
    return data;
}
let day = validateInput("Enter the day of the month you were born (01-31): ", 2, 0, 32);
let month = validateInput("Enter the the month you were born (01-12): ", 2, 0, 13);
let year = validateInput("Enter the year you were born (0000): ", 4, 1800, 10000);
const today = new Date().getTime();
const dob = new Date(day, month, year).getTime();
const numberOfDays = Math.round(Math.abs((today - dob) / (24 * 60 * 60 * 1000)));
console.log(numberOfDays);*/

// Activity 4:

// Constant variable: points to a dict which contains three keys and three values (lists)
/*const vals = {1: ["X", "O", " "], 4: ["X", "X", " "], 7: ["O", " ", " "]}
// For loop
for (let i = 0; i < 9; i++){
    // Logs pipes with O's and X's if in centre of section
    if (i == 1 || i == 4 || i == 7){
        console.log(`  ${vals[i][0]}  |  ${vals[i][1]}  |  ${vals[i][2]}  `)
    }
    // If at top or bottom of section, logs pipes
    else {console.log("     |     |     ")}
    // Logs dashes if section complete
    if (i == 2 || i == 5){
        console.log("-----------------")
    }
}*/
