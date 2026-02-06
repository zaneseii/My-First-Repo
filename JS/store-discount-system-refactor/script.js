//Write a discount function

function getDiscount(customer_type, purchase_amount) {
   
    // Validate purchase amount
    if (purchase_amount <= 0) {
        console.log("Warning: Invalid purchase amount.");
        purchase_amount = 0;
    }

    // Validate customer type
    if (customer_type !== "member" && customer_type !== "non-member") {
        console.log("Warning: Invalid customer type.");
        customer_type = "non-member";
    }

    if (customer_type === "member") {
        if (purchase_amount >= 1000) {
            return 0.20;
        } else if (purchase_amount >= 500) {
            return 0.10;
        } else {
            return 0.05;
        }
    }

    if (customer_type === "non-member") {
        if (purchase_amount >= 1000) {
            return 0.10;
        } else if (purchase_amount >= 500) {
            return 0.05;
        } else {
            return 0;
        }
    }

    return 0;
}

//Write a final price function

function calculateFinalPrice(purchase_amount, discountRate) {
    let discountAmount = purchase_amount * discountRate;
    let finalPrice = purchase_amount - discountAmount;
    let discountPercent = discountRate * 100;

    return {
        finalPrice: finalPrice,
        discountAmount: discountAmount,
        discountPercent: discountPercent
    };
}

//Process multiple customers

const customers = [
    { name: "Zane", customer_type: "member", purchase_amount: 10 },
    { name: "Rui", customer_type: "member", purchase_amount: 800 },
    { name: "Kobe", customer_type: "non-member", purchase_amount: 1200 }
];

for (let i = 0; i < customers.length; i++) {
    let customer = customers[i];
    let discountRate = getDiscount(customer.customer_type, customer.purchase_amount);
    let result = calculateFinalPrice(customer.purchase_amount, discountRate);

    console.log(
        `${customer.name} (${customer.customer_type}) - ` +
        `Original: $${customer.purchase_amount} - ` +
        `Discount: ${result.discountPercent}% ($${result.discountAmount}) = ` +
        `Final: $${result.finalPrice}`
    );
}
