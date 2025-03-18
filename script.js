// Select elements
let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let checkbox = document.getElementById("checkbox");
let submitButton = document.getElementById("submit");
let existingUserButton = document.getElementById("existing");

// Hide "Login as existing user" initially
existingUserButton.style.display = "none";

// Load saved credentials (if any)
window.onload = function () {
    let storedUser = localStorage.getItem("userObj");

    if (storedUser) {
        let userObj = JSON.parse(storedUser);
        existingUserButton.style.display = "block";

        existingUserButton.addEventListener("click", function () {
            alert(`Logged in as ${userObj.username}`);
        });
    }
};

// Handle form submission
submitButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form from refreshing

    let username = usernameInput.value.trim();
    let password = passwordInput.value.trim();
    let rememberMe = checkbox.checked;

    if (username && password) {
        alert(`Logged in as ${username}`);

        if (rememberMe) {
            let userObj = { username, password };
            localStorage.setItem("userObj", JSON.stringify(userObj));
        } else {
            localStorage.removeItem("userObj");
        }

        // Reload to update UI
        location.reload();
    } else {
        alert("Please enter both username and password.");
    }
});
