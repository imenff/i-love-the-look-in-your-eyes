// script.js

// Function to display an alert when the button is clicked
function showAlert() {
    alert("Thank you! Your gift is on its way!");
}

// Add event listener to the button
document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector("button");
    button.addEventListener("click", showAlert);
});
