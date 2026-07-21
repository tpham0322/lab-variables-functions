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

let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");

alert(formatFullName(firstName, lastName));