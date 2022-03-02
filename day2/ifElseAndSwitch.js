// Task 1

//if (1 === "1") {
    //console.log(true);
//}
//else {
    //console.log(false);
//}

//if (1 != "1") {
    //console.log(true);
//}
//else {
    //console.log(false);
//}

// Task 2

//let place = "Manc";
//let weather = "Cloudy";
//if (place == "Manc" && weather == "Sunny") {
    //console.log("Check again");
//}
//else if (place == "Manc" && weather == "Rain") {
    //console.log("0bvs");
//}
//else {
    //console.log("What it isn't raining?")
//}

// Task 3 - Switch Statement:

//const grade = 87;
//switch (true) {
    //case grade >= 70:
        //console.log("Distinction")
        //break;
    //case grade >= 60:
        //console.log("Merit")
        //break;
    //case grade >= 50:
        //console.log("Pass")
        //break;
    //default:
        //console.log("Failed")
//}

// Activity 1:

//const age = 21
//const countryIsUk = true
//if (age > 17 && countryIsUk){
    //console.log("Yes I can serve you")
//}
//else{
    //console.log("You are not old enough")
//}

// Activity 2:

//const pizzaTopping = "Anchovies"
//switch (pizzaTopping){
    //case "Pepporoni":
    //case "Pineapple":
    //case "Ham":
        //console.log("These are important ingredients for my pizza.")
        //break
    //case "Chicken":
    //case "Basil":
        //console.log(`I dont mind having ${pizzaTopping} on my pizza.`)
        //break
    //case "Olives":
    ///case "Anchovies":
        //console.log(`${pizzaTopping} should not be on a pizza.`)
        //break
//}

// Activity 3:

//const password = "password123"
//if (password.length < 8){
    //console.log("Password is too short!")
//}
//else{
    //console.log(password)
//}

// Activity 4:

//const num = 30
//if ((num % 3 || num % 5) == 0){
    //console.log(`${num} is divisible by 3 or 5.`)
//}
//else{
    //console.log(`${num} is not divisible by 3 or 5.`)
//}

// Activity 5:

//const num = 15
//if ((num % 3 == 0) && (num % 5 == 0)){
    //console.log("fizz buzz")
//}
//else if (num % 3 == 0){
    //console.log("fizz")
//}
//else if (num % 5 == 0){
    //console.log("buzz")
//}
//else{
    //console.log(num)
//}

// Activity 6:

//function isPalindrome(number){
    //let reversedNumber = ""
    //for (let index = (number.toString().length-1); index > -1; index--){
        //reversedNumber += number.toString()[index];
    //}
    //if (number == reversedNumber){
        //return true
    //}
    //else {
        //return false
    //}
//}
//const num = 50055
//console.log(isPalindrome(num))

// Activity 7:

/*let time = 7
const placeOfWork = "CodeNation"
const townOfHome = "Townsville"
if (time == 7){
    console.log(`I'm at home in ${townOfHome}.`)
}
else if (time == 8){
    console.log(`I'm commuting from ${townOfHome} to ${placeOfWork}.`)
}
else if (time == 9){
    console.log(`I'm at ${placeOfWork}.`)
}*/

// Activity 8:

/*const str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
const vowels = ["a", "e", "i", "o", "u"]
for (index = str.length - 1; index > -1; index--){
    if (vowels.includes(str[index], 0)){
        console.log(index)
        indexFound = true
        break
    }
}*/

// Activity 9:

/*const word = "strings are strings"
if (word[0] == word.slice(-1)){
    return true
}else{
    return false
}*/

// Activity 10:

/*const num1 = 8
const num2 = 12
if ((num1 + num2) % 2 == 0){
    return console.log(num1 + num2)
}else{
    return console.log(num1 * num2)
}*/
