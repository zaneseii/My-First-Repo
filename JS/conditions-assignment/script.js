//Task 1
console.log("Task 1: Grading System");

let score = 95;
let grade;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
}   else {
    console.log("Grade: F");
}

//Task 2 
console.log("Task 2: Weather Advisor");

let temperature = 32; 

if (temperature < 0) {
    console.log("It's freezing outside! Bundle up!");
} else if (temperature <= 15) {
    console.log("It's cold outside. Wear a jacket.");
} else if (temperature <= 30) {
    console.log("The weather is nice. Enjoy your day!");
} else {
    console.log("It's hot outside. Stay hydrated!");
}

//Task 3
console.log("Task 3: Eligibility Checker");

let age = 13; 

if (age < 13) {
    console.log("You are too young for this activity.");
} else if (age <= 17) {
    console.log("You need parental permission.");
} else {
    console.log("You are eligible for this activity.");
}

//Task 4
console.log("Task 4: Ticket Price Calculator");

// let age = 14;   can be used from Task 3     
let isMember = false; 
let price;

if (age < 12) {
    price = 0;
} else if (isMember) {
    price = 10;
} else {
    price = 15;
}

console.log("Ticket price: $" + price);

//Task 5 (Optional)
console.log("Task 5: Leap Year Checker");

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(2020, "=", isLeapYear(2020)); 
console.log(1900, "=", isLeapYear(1900)); 
console.log(2000, "=", isLeapYear(2000)); 
console.log(2023, "=", isLeapYear(2023)); 


