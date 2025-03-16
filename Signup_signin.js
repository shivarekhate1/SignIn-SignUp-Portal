document.addEventListener("DOMContentLoaded", function () {
    const formTitle = document.getElementById("form-title");
    const authForm = document.getElementById("auth-form");
    const emailField = document.getElementById("email");
    const toggleText = document.getElementById("toggle-text");
    const toggleLink = document.getElementById("toggle-link");
    
    let isSignUp = false;
    
    toggleLink.addEventListener("click", function (event) {
        event.preventDefault();
        isSignUp = !isSignUp;
        
        formTitle.textContent = isSignUp ? "Sign Up" : "Sign In";
        emailField.style.display = isSignUp ? "block" : "none";
        toggleText.innerHTML = isSignUp 
            ? "Already have an account? <a href='#' id='toggle-link'>Sign In</a>"
            : "Don't have an account? <a href='#' id='toggle-link'>Sign Up</a>";
        
        document.getElementById("toggle-link").addEventListener("click", function (event) {
            event.preventDefault();
            toggleLink.click();
        });
    });
});