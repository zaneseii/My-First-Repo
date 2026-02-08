/*  
 * DOCU: Applies a callback function to each element of an array and returns a new transformed array  
 * @param {Array} arr - The array to iterate over  
 * @param {Function} callback - Function applied to each array element  
 * @returns {Array} - A new array containing transformed values  
 *  
 * Last Updated: 2026-02-08  
 * Author: Louis Zane De Jesus  
 * Last Updated By: Louis Zane De Jesus  
 */
function customMap(arr, callback) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }

    return result;
}

let numbers = [1, 2, 3];

let doubled = customMap(numbers, function(num) {
    return num * 2;
});

console.log(doubled); // Output: [2, 4, 6]



/*  
 * DOCU: Filters elements of an array based on a callback condition  
 * @param {Array} arr - The array to filter  
 * @param {Function} callback - Function that returns true for elements to keep  
 * @returns {Array} - New array containing only elements that passed the test  
 *  
 * Last Updated: 2026-02-08  
 * Author: Louis Zane De Jesus  
 * Last Updated By: Louis Zane De Jesus  
 */
function customFilter(arr, callback) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}

let numbers2 = [1, 2, 3, 4, 15];

let result = customFilter(numbers2, function(val) {
    return val < 10;
});

console.log(result); // Output: [1, 2, 3, 4]



/*  
 * DOCU: Checks if at least one element in the array satisfies the callback condition  
 * @param {Array} arr - The array to evaluate  
 * @param {Function} callback - Condition function executed on each element  
 * @returns {Boolean} - True if any element satisfies the condition, otherwise false  
 *  
 * Last Updated: 2026-02-08  
 * Author: Louis Zane De Jesus  
 * Last Updated By: Louis Zane De Jesus  
 */
function customSome(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return true;
        }
    }
    return false;
}

let numbers3 = [1, 2, 3, 4];

let result2 = customSome(numbers3, function(val) {
    return val > 5;
});

console.log(result2);



/*  
 * DOCU: Checks if all elements in an array satisfy the callback condition  
 * @param {Array} arr - The array to evaluate  
 * @param {Function} callback - Condition function applied to each element  
 * @returns {Boolean} - True if all elements meet the condition, otherwise false  
 *  
 * Last Updated: 2026-02-08  
 * Author: Louis Zane De Jesus  
 * Last Updated By: Louis Zane De Jesus  
 */
function customEvery(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i])) {
            return false;
        }
    }
    return true;
}

let numbers4 = [1, 2, 3];

let result3 = customEvery(numbers4, function(val) {
    return val > 0;
});

console.log(result3);



/*  
 * DOCU: Reduces an array to a single value using an accumulator and callback function  
 * @param {Array} arr - The array to reduce  
 * @param {Function} callback - Function that processes each element into the accumulator  
 * @param {any} initialValue - Starting value of the accumulator  
 * @returns {any} - Final accumulated value  
 *  
 * Last Updated: 2026-02-08  
 * Author: Louis Zane De Jesus  
 * Last Updated By: Louis Zane De Jesus  
 */
function customReduce(arr, callback, initialValue = 0) {
    let accumulator = initialValue;

    for (let i = 0; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i]);
    }

    return accumulator;
}

let numbers5 = [1, 2, 3];

let sum = customReduce(numbers5, function(acc, num) {
    return acc + num;
});

console.log(sum);



/*  
 * DOCU: Checks if any element in the array satisfies the callback condition  
 * @param {Array} arr - The array to search  
 * @param {Function} callback - Condition function used to test each element  
 * @returns {Boolean} - True if any element matches the condition, otherwise false  
 *  
 * Last Updated: 2026-02-08  
 * Author: Louis Zane De Jesus  
 * Last Updated By: Louis Zane De Jesus  
 */
function customIncludes(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return true;
        }
    }
    return false;
}

let numbers6 = [1, 2, 3];

let result4 = customIncludes(numbers6, function(val) {
    return val === 2;
});

console.log(result4);
