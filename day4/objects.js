// Task 1:

/*let person = {name: "Thomas"}
person.age = 19
console.log(person)*/

// Activity:

/*let alarms = {"weekendAlarm": "no alarm needed", "weekdayAlarm": "get up at 7am"}
let day = "Thursday"
let alarm
if (day == "Saturday" || day == "Sunday"){
    alarm = alarms["weekendAlarm"]
}
switch (day){
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        alarm = alarms["weekdayAlarm"]
}
console.log(alarm)*/

// Activity:

/*let person = {"name": "Thomas", "age": 19}
person.favouriteSongs = ["Song 1", "Song 2", "Song 3"]
console.log(person)*/

// Activity 1:

/*let person = {"name": "Thomas", "age": 19,
    "favouriteSongs": ["Song 1", "Song 2", "Song 3"],
    sayHi(){
        return `Hello my name is ${this.name}`
    }
}
console.log(person.sayHi())*/

// Activity 2:

/*let pet = {"name": "Dave", "typeOfPet": "dog", "age": 5000, "colour": "purple",
    eat(){
        return `${this.name} is eating`
    },
    drink(){
        return `${this.name} is drinking`
    }
}
console.log(pet.eat())
console.log(pet.drink())*/

// Activity 3:

// const coffeeShop = {
//     branch: 'Manchester',
  
//     drinks: {
//       americano: 2,
//       latte: 2.50,
//       espresso: 1.5,
//       capuccino: 3,
//     },
  
//     food: {
//       cookie: 1.5,
//       muffin: 2,
//       sandwich: 3,
//     },
  
//     drinksOrdered(...drinks) {
//       let cost = 0;
//       const drinksStr = drinks.join(' & ');
//       drinks.forEach(drink => (cost += this.drinks[drink]));
//       cost = cost.toString().split('.');
//       cost[1] = cost[1].padEnd(2, '0');
//       cost = cost.join('.');
  
//       return this.displayOrder(drinksStr, cost);
//     },
  
//     foodOrdered(...food) {
//       let cost = 0;
//       const foodStr = food.join(' & ');
  
//       food.forEach(item => (cost += this.food[item]));
  
//       cost = cost.toString().split('.');
//       cost[1] = cost[1].padEnd(2, '0');
//       cost = cost.join('.');
  
//       return this.displayOrder(foodStr, cost);
//     },
  
//     displayOrder(order, cost) {
//       return console.log(
//         `Your ${order} will be with you shortly, the total is £${cost}.`
//       );
//     },
//   };
  
//   coffeeShop.drinksOrdered('capuccino', 'espresso');
//   coffeeShop.foodOrdered('cookie', 'muffin');
