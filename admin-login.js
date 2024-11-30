// Predefined admin credentials
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin";

document.getElementById("admin-login-form").addEventListener("submit", (e) => {
    e.preventDefault();

    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validate credentials
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        // Redirect to admin dashboard
        window.location.href = "./admin.html";
    } else {
        // Show error message
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
    }
});
