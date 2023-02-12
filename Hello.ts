// Get the button element
const button = document.querySelector("#a") as HTMLButtonElement;

// Define the function to log the statement
function handleClick(event: MouseEvent) {
    console.log("Button clicked!");
}

// Attach the function to the button click event
button.addEventListener("click", handleClick);
