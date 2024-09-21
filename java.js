<!doctype html>
<html>
<head> 
<meta charset= "UTF-8">
<title>My Homepage</title>
<script>
    alert('Welcome to My Website, !')
</script>   

<script>
documen.write('<p>Welome to My Website!</p>');
</script>    
document.addEventListener('DOMContentLoaded', function() {
    // Prompt the visitor for their name
    let visitorName = prompt("Please enter your name:");

    // Check if a name was entered
    if (visitorName) {
        // Display an alert welcoming the visitor
        alert("Welcome to my site, " + visitorName + "!");

        // Personalize the page using the visitor's name
        let welcomeMessage = document.createElement('h2');
        welcomeMessage.textContent = "Hello, " + visitorName + "! Welcome to my personal page.";
        document.body.prepend(welcomeMessage);
    }
});
