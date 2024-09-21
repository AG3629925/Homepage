// Function to prompt the visitor's name and personalize the page
function personalizePage() {
    // Prompt the visitor for their name
    let visitorName = prompt("Please enter your name:");

    // Display a welcome alert
    alert("Welcome, " + visitorName + "!");

    // Personalize the page by adding a welcome message
    let welcomeMessage = document.createElement("h1");
    welcomeMessage.textContent = "Welcome to the page, " + visitorName + "!";
    document.body.appendChild(welcomeMessage);
}

// Call the function to personalize the page
personalizePage();
