// Task 1:

/*const pressGrindBeans = () => {
    console.log("Grinding for 20 seconds");
}
pressGrindBeans()*/

// Task 2:

/*let coffeeIsGrinding = false;
const pressGrindBeans = () => {
    if (coffeeIsGrinding) {
        console.log("Stopping the grind");
        coffeeIsGrinding = false;
    }
    else {
        console.log("Grinding is about to begin")
        coffeeIsGrinding = true;
    }
}*/

// Task 3:

/*let accnumber = 50449921;
const cashWithdrawal = (amount, accnum) => {
    console.log(`Withdrawing ${amount} from account ${accnum}`);
}
cashWithdrawal(300, accnumber)
cashWithdrawal(30, 50449921)
cashWithdrawal(200, 50447921)*/

// Task 4:

/*const addUp = (num1, num2) => {
    return num1 + num2;
}

addUp(7, 3);
console.log(addUp(2, 5));*/

// Task 4:

/*const multiplyByNineFifths = (celcius) => {
    return celcius * (9/5);
}
const getFahrenheit = (celcius) => {
    return multiplyByNineFifths(celcius) + 32;
}
console.log("The temperature is " + getFahrenheit(15) + "F");*/
// Output: The temperature is 59F

// Activity 1:

/*const factorial = (n) => {
    if ((n === 0) || (n === 1)) {
        return 1;
    }
    else {
        return (n * factorial(n-1));
    }
}
console.log(factorial(33));*/

// Activity 2:

/*let orderCount = 0;
const takeOrder = (topping, orderCount) => {
    global(orderCount)
    orderCount++;
    console.log(`Pizza with ${topping}.\nOrder number: ${orderCount}`);
}
takeOrder("pineapple", orderCount)
takeOrder("pineapple", orderCount)*/

// Activity 3:

/*const validWithdrawAm = (pinNumber, accBal, withdrawAm) => {

    if (pinNumber == 9999 && accBal >= withdrawAm){
        return true
    }

    else if (pinNumber != 9999 && accBal < withdrawAm){
        return false
    }

    else if (pinNumber != 9999){
        return false
    }

    else if (accBal < withdrawAm){
        return false
    }
}

if (validWithdrawAm(9999, 50000, 2000)){
    console.log("Cash being dispensed")
}

else{
    console.log("Transaction error")
}*/
