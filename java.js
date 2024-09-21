function WelcomePage() {
    
    let visitorName = prompt("Please enter your name:");

    alert("Welcome, " + visitorName + "!");
    
    let welcomeMessage = document.createElement("h1");
    welcomeMessage.textContent = "Welcome to my Home Page, " + visitorName + "!";
    document.body.appendChild(welcomeMessage);
}

WelcomePage();
