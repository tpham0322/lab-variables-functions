// ==========================
// Task 1
// ==========================

function formatFullName(firstName, lastName) {
    if (!firstName || !lastName) {
        return "Invalid name input.";
    }

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

