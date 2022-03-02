// Note: no wrapping comment as no naming conflicts present

console.log("Hello".toUpperCase());

console.log(Math.floor(Math.random()*10));

console.log("    |    |    ");
console.log("    |    |    ");
console.log("    |    |    ");
console.log("--------------");
console.log("    |    |    ");
console.log("    |    |    ");
console.log("    |    |    ");
console.log("--------------");
console.log("    |    |    ");
console.log("    |    |    ");
console.log("    |    |    ");

for (let i = 0; i < 9; i++) {
    if (i == 3 || i == 6){
        console.log("--------------")
    }
    console.log("    |    |    ")
}
