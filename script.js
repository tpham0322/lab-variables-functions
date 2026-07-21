// ==========================
// Task 1
// ==========================

// Function to format full name
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

// Function to calculate total cost including tax
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


// ==========================
// Task 3
// ==========================

// Function to check eligibility based on age and employment status
function checkEligibility(age, isEmployed) {
    if (age > 18 && isEmployed) {
        return "Eligible";
    } else if (age > 18 && !isEmployed) {
        return "Conditionally Eligible";
    } else {
        return "Not Eligible";
    }
}

let age = Number(prompt("Enter your age:"));
while (isNaN(age)) {
    age = Number(prompt("Invalid input. Enter your age:"));
}

let employed = prompt("Are you employed? (yes/no)");

while (
    employed === null ||
    (employed.toLowerCase() !== "yes" && employed.toLowerCase() !== "no")
) {
    employed = prompt("Invalid input. Please enter yes or no:");
}

let isEmployed = employed.toLowerCase() === "yes";

alert(checkEligibility(age, isEmployed));