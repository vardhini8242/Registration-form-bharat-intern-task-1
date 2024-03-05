// script.js

function registerUser() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    // Simple password matching check
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // You can perform additional validation here

    // Create an object to store user information
    const user = {
        username,
        email,
        password
    };

    // You can send this user object to the server for further processing

    // For now, let's just log the user object to the console
    console.log(user);

    // Optionally, you can clear the form after registration
    document.getElementById('registrationForm').reset();
}
