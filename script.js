// ==========================
// Task 1
// ==========================

function formatFullName(firstName, lastName) {
    if (!firstName || !lastName) {
        return "Invalid name input.";
    }

    // Capitalize the first letter of each name and make the rest lowercase
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

    return `${lastName}, ${firstName}`;
}

// Reprompts if the user enters an empty string or cancels the prompt
let firstName = prompt("Enter your first name:");

while (!firstName) {
    firstName = prompt("Invalid input. Please enter your first name:");
}

let lastName = prompt("Enter your last name:");

while (!lastName) {
    lastName = prompt("Invalid input. Please enter your last name:");
}

alert(formatFullName(firstName, lastName));


// ==========================
// Task 2
// ==========================

function calculateTotalCost(price, quantity, taxRate) {
    if (isNaN(price) || isNaN(quantity) || isNaN(taxRate)) {
        return "Invalid input.";
    }

    return (price * quantity) * (1 + taxRate);
}

let price = Number(prompt("Enter the price:"));
while (isNaN(price)) {
    price = Number(prompt("Invalid input. Enter the price:"));
}

let quantity = Number(prompt("Enter the quantity:"));
while (isNaN(quantity)) {
    quantity = Number(prompt("Invalid input. Enter the quantity:"));
}

let taxRate = Number(prompt("Enter the tax rate (Example: 0.07):"));
while (isNaN(taxRate)) {
    taxRate = Number(prompt("Invalid input. Enter the tax rate:"));
}

alert("Total Cost: $" + calculateTotalCost(price, quantity, taxRate).toFixed(2));