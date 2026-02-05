//Task 1
console.log("Task 1: Multiplication Table Generator\n");

let number = 5; 

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

//Task 2
console.log("\nTask 2: Sum of First N Natural Numbers\n");

let n = 10;
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += i; 
}

console.log(`The sum of the first ${n} numbers is: ${sum}`);

//Task 3
console.log("\nTask 3: Array Elements Printer\n");

const numbers = [7, 14, 21, 28, 35]; 

for (let i = 0; i < numbers.length; i++) {
    console.log(`Array Element: ${numbers[i]}`);
}

//Task 4
console.log("\nTask 4: Pattern Printer\n");

let rows = 10; 

for (let i = 1; i <= rows; i++) {
    let stars = ""; 
    for (let j = 1; j <= i; j++) {
        stars += "*"; 
    }
    console.log(stars); 
}

//Task 5
console.log("\nTask 5: Reverse Array Elements\n");

let array = [11, 23, 45, 17, 59]; 

for (let i = array.length - 1; i >= 0; i--) {
    console.log(`Reversed Element: ${array[i]}`);
}


