
document.addEventListener("DOMContentLoaded", function () {

    // Mock user data for direct login
    const mockUser = {
        email: "mockuser@example.com",
        password: "mockpassword"
    };

    // Function to show the popup notification
    function showPopup(message) {
        const popup = document.getElementById("popupNotification");
        popup.textContent = message;
        popup.classList.add("show");

        // Hide after 2.5 seconds
        setTimeout(() => {
            popup.classList.remove("show");
        }, 2500);
    }

    // Login Form Submission Handling
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Get form values
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Use mock data for login validation
            if (email === mockUser.email && password === mockUser.password) {
                showPopup("Login successful!");
                window.location.href = "dashboard.html";  // Redirect to dashboard
            } else {
                showPopup("Invalid email or password. Please try again.");
            }
        });
    }

    // Dashboard Sanction Loan Button Handling
    const sanctionButtons = document.querySelectorAll(".sanctionBtn");
    sanctionButtons.forEach(button => {
        button.addEventListener("click", function () {
            showPopup("Payment process activated!");
        });
    });

    // Handle Logout Button Click
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            // Clear any session data or user data from local storage (if applicable)
            localStorage.removeItem("user");

            showPopup("Logout successful!");
            window.location.href = "index.html";
        });
    }
});
