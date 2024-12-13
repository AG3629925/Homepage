const funFacts = [
  "The first website ever created is still online!", 
  "HTML stands for HyperText Markup Language.", 
  "CSS was first proposed by Håkon Wium Lie in 1994.", 
  "JavaScript was created in just 10 days."
];
function showFunFact() {
  const randomIndex = Math.floor(Math.random() * funFacts.length);
  const fact = funFacts[randomIndex];
  $('#funFact').text(fact).fadeIn('slow');
}

$(document).ready(function() {
  $('#factButton').click(function() {
    showFunFact();
  });


  $('#contactForm').submit(function(event) {
    event.preventDefault();
    $('#thankYouMessage').show();
    $(this).trigger("reset");
  });
});
