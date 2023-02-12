// Get the button element
var button = document.querySelector("#a");
// Define the function to log the statement
function handleClick(event) {
    console.log("Button clicked!");
}
// Attach the function to the button click event
button.addEventListener("click", handleClick);
