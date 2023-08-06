// JavaScript code for your website

// Function to change the color of a button when clicked
function changeButtonColor() {
    const button = document.querySelector('.button');
    button.style.backgroundColor = '#ff9900';
}

// Add event listener to the button element
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.button');
    button.addEventListener('click', changeButtonColor);
});
