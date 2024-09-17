// Sample login credentials
const validUsername = "admin";
const validPassword = "1234";

// Handling form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting and refreshing the page

    // Get the entered username and password
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    // Check if the entered credentials match the valid ones
    if (enteredUsername === validUsername && enteredPassword === validPassword) {
        window.location.href = "dashboard.html"; // Redirect to dashboard
    } else {
        alert("Incorrect username or password. Please try again.");
        
        // clear the input fields after alert
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
});
