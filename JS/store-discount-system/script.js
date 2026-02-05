// Task: Store Discount System


let customer_type = "member"; 
let purchase_amount = 2400;   

let discount = 0; 

if (customer_type === "member") {
    if (purchase_amount >= 1000) {
        discount = 20;
    } else if (purchase_amount >= 500) {
        discount = 10;
    } else {
        discount = 5;
    }
} else if (customer_type === "non-member") {
    if (purchase_amount >= 1000) {
        discount = 10;
    } else if (purchase_amount >= 500) {
        discount = 5;
    } else {
        discount = 0;
    }
} else {
    console.log("Invalid customer type.");
}

let finalPrice = purchase_amount - (purchase_amount * discount / 100);

console.log("Customer Type:", customer_type);
console.log("Purchase Amount: $" + purchase_amount);
console.log("Discount Applied: " + discount + "%");
console.log("Final Price: $" + finalPrice);