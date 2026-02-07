// Task 1: Custom Map Function

function customMap(arr, callback) {
    let result = []; // store the transformed results

    for (let i = 0; i < arr.length; i++) {  // Loop through each element of the array
        result.push(callback(arr[i]));  // Call the callback with the current element and push the result
    }

    return result; // return the new array
}

let numbers = [1, 2, 3];

let doubled = customMap(numbers, function(num) {
    return num * 2;
});

console.log(doubled); // Output: [2, 4, 6]

// Task 2: Custom Filter Function

function customFilter(arr, callback) {
    let result = []; // store elements that pass the test

    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // If the callback returns true = keep the element
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result; // return the filtered array
}

let numbers2 = [1, 2, 3, 4, 15];

// Keep only numbers less than 10
let result = customFilter(numbers2, function(val) {
    return val < 10;
});

console.log(result); // Output: [1, 2, 3, 4]

// Task 3: Custom Some Function

function customSome(arr, callback) {
    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // If callback returns true for any element → return true immediately
        if (callback(arr[i])) {
            return true;
        }
    }
    // If no element passed the test → return false
    return false;
}

let numbers3 = [1, 2, 3, 4];

// Check if any number is greater than 5
let result2 = customSome(numbers3, function(val) {
    return val > 5;
});

console.log(result2);

// Task 4: Custom Every Function
function customEvery(arr, callback) {
    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // If callback returns false for any element → return false immediately
        if (!callback(arr[i])) {
            return false;
        }
    }
    // If all elements passed the test = return true
    return true;
}

let numbers4 = [1, 2, 3];

// Check if all numbers are greater than 0
let result3 = customEvery(numbers4, function(val) {
    return val > 0;
});

console.log(result3);

// Task 5: Custom Reduce Function

function customReduce(arr, callback, initialValue = 0) {
    let accumulator = initialValue; // start with initial value

    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i]);
    }

    return accumulator; // return the final accumulated result
}

let numbers5 = [1, 2, 3];

let sum = customReduce(numbers5, function(acc, num) {
    return acc + num;
});

console.log(sum);

// Task 6: Custom Includes Function

function customIncludes(arr, callback) {
    // Loop through each element
    for (let i = 0; i < arr.length; i++) {
        // If callback returns true for any element → return true
        if (callback(arr[i])) {
            return true;
        }
    }
    // If no element passed the test → return false
    return false;
}

let numbers6 = [1, 2, 3];

// Check if 2 is in the array
let result4 = customIncludes(numbers6, function(val) {
    return val === 2;
});

console.log(result4); 








