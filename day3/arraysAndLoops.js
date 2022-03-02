// Task 1

//let coffeeOrder = [
    //"Alex - Cortado",
    //"Ben - Cortado",
    //"Charlie - Whatever's new"
//];
//console.log(coffeeOrder)
//console.log(coffeeOrder[2])

// Task 2

//let coffeeOrder = [
    //"Alex - Cortado",
    //"Ben - Cortado",
    //"Charlie - Whatever's new"
//];
//console.log(coffeeOrder)
//coffeeOrder[1] = "Ann - Vanilla latte";
//console.log(coffeeOrder)
//console.log(coffeeOrder.length)

// Task 3

//let coffeeOrder = [
    //"Alex - Cortado",
    //"Ben - Cortado",
    //"Charlie - Whatever's new"
//];
//coffeeOrder.push("Donna - espresso");
//console.log(coffeeOrder)
//coffeeOrder.pop();
//console.log(coffeeOrder)

// Activity 1

//let favSongs = ["Song 1", "Song 2", "Song 3"]
//console.log(favSongs)
//favSongs.push("Song 4", "Song 5")
//console.log(favSongs)
//favSongs.pop()
//console.log(favSongs)

// Activity 2

/*function mapFunc(num) {
    return num * 10;
  }
let favSongs = [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10]
favSongs.push(11)
console.log(favSongs)
favSongs.pop()
console.log(favSongs)
let mp = favSongs.map(mapFunc)
console.log(mp)*/

// Task 4

//let favouriteDrinks = ["Coke", "Fanta", "Tonic"];
//console.log(favouriteDrinks[0])
//console.log(favouriteDrinks[1])
//console.log(favouriteDrinks[2])

// For Loop Implementation

//let favouriteDrinks = ["Coke", "Fanta", "Tonic", "Red Bull"];
//for (let i = 0; i < favouriteDrinks.length; i++){
//    console.log(favouriteDrinks[i]);
//}

// Task 5

/*let multiplesTwo = [];

for (let i = 0; i < 20; i++){
    if (i % 2 == 0){
        multiplesTwo.push(i);
    }
}
console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`);*/

// Task 6

/*let age = 15;

while (age < 18){
    console.log("You're a child!");
    age++;
}

console.log("You're an adult!");*/

// Task 7

/*let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "Club";

while (currentCard != "Spade"){
    console.log(currentCard)
    currentCard = cards[Math.floor(Math.random()*4)];
}

console.log(currentCard)*/

// Activity 1:

/*favFilms = ["Film 1", "Film 2", "Film 3", "Film 4", "Film 5"]
favFilms.push("Film 6", "Film 7")
for (let filmIndex = 0; filmIndex < favFilms.length; filmIndex++){
    console.log(favFilms[filmIndex])
}*/

// Activity 2:

/*let genNums = []
for (let nthNum = 0; nthNum < 6; nthNum++){
    genNums.push(Math.floor(Math.random()*(51-1)+1))
}
console.log(genNums)*/

// Activity 3:

/*for (let num = 9; num >= 0; num--){
    console.log(num)
}*/

// Activity 4:

/*let filmList = ["Generic Action Film", "Generic Comedy Film", "Ghostbusters", "Generic Horror Film"];
function containsGhostbusters(films){
    for (filmIndex = 0; filmIndex < films.length; filmIndex++){
        if (films[filmIndex] == "Ghostbusters" && filmIndex == 2){
            return (true, "Yay it's Ghostbusters")
        }
    }
    return (false, "Boo! We want Ghostbusters")
}
bool = containsGhostbusters(filmList)
console.log(bool)
filmList.pop()
filmList.pop()
filmList.push("Generic Comedy Film: The Sequel", "Ghostbusters")
bool = containsGhostbusters(filmList)
console.log(bool)*/

// Activity 5:

/*for (let nthNum = 1; nthNum < 7; nthNum++){
    randomN = Math.floor(Math.random()*(31-1)+1)
    if (randomN % 7 == 0){
        console.log(`Number generated: ${randomN} is divisible by 7.`)
    }
    else {
        console.log(`Number generated: ${randomN} is not divisible by 7.`)
    }
}*/

// Activity 6:

/*const bobsFollowers = ["Kevin", "Dave", "Sarah", "James"]
const hannahsFollowers = ["Rebecca", "Arnold", "Chris", "Dave"]
for (followerIndexBob = 0; followerIndexBob < bobsFollowers.length; followerIndexBob++){    
    for (followerIndexHannah = 0; followerIndexHannah < bobsFollowers.length; followerIndexHannah++){
        if (bobsFollowers[followerIndexBob] == hannahsFollowers[followerIndexHannah]){
            console.log(bobsFollowers[followerIndexBob])
        }
    }
}*/
