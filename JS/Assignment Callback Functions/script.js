//Task 1: Custom Array Filter

function customFilter(arr, callback) {
    let result = []; // this will store all elements that pass the test

    // loop through each item in the array
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]; // current element

        // if callback returns true → keep the element
        if (callback(current)) {
            result.push(current);
        }
    }

    return result; // return the filtered array
}

function isEven(num) {
    return num % 2 === 0;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = customFilter(numbers, isEven);
console.log(evenNumbers); 

//Task 2: Countdown Timer

function countdown(start, callback) {
    for (let i = start; i >= 0; i--) {
        (function(n) {
            setTimeout(function() {
                callback(n);
            }, (start - n) * 1000); // delay increases each step
        })(i);
    }
}

function displayNumber(num) {
    console.log(num);
}

countdown(5, displayNumber);

//Task 3: Simple Event Listener

function createButton(buttonText, callback) {
    console.log("Button Created: " + buttonText);

    // simulate button click after 3 seconds
    setTimeout(function() {
        console.log("Button is being clicked...");
        callback();
    }, 3000);
    
    // In a real scenario, you would attach the callback to an actual button click event
    //sample code to create a button and attach the event listener:
    // 1. Create a new button element
    // var button = document.createElement("button");

    // // 2. Set the button text
    // button.textContent = buttonText;

    // // 3. Attach the click event listener (callback)
    // button.addEventListener("click", callback);

    // // 4. Add the button to the page so we can see it
    // document.body.appendChild(button);

    // console.log("Button Created: " + buttonText);
}

function buttonClicked() {
    console.log("Button Clicked!");
}

createButton("Click Me", buttonClicked);

//Task 4: Task Runner

function runTasks(tasks) {
    let i = 0;

    function runNext() {
        if (i < tasks.length) {
            tasks[i]();       // run the current task
            i++;
            setTimeout(runNext, 1000); // wait 1 second before next task
        }
    }

    runNext(); // start the first task
}

// Example tasks
function task1() {
    console.log("Task 1 completed");
}

function task2() {
    console.log("Task 2 completed");
}

function task3() {
    console.log("Task 3 completed");
}

// Run tasks
runTasks([task1, task2, task3]);

//Task 5: Interactive Quiz Game (Extra Miles)

function askQuestion(question, choices, correctAnswer, callback) {
    // Simulated user response
    let userResponse = "4";

    console.log(question);
    console.log("Choices: " + choices.join(", "));
    console.log("User response: " + userResponse);

    // Check if the answer is correct
    let isCorrect = userResponse === correctAnswer;
    callback(isCorrect); // call the callback
}

function checkAnswer(isCorrect) {
    if (isCorrect) {
        console.log("Correct!");
    } else {
        console.log("Wrong!");
    }
}

// Run the quiz
askQuestion("What is 2 + 2?", ["1", "2", "3", "4"], "4", checkAnswer);


