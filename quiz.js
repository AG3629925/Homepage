var questions = ["In what country did the first Starbucks open outside of North America?", "When was the internet invented?", "When did Facebook first launch?"];
var answers = ["Japan", "1969", "2004"]

function startQuiz() {
  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    let guesses = 3;
    let correct = false;
    while (guesses > 0 && !correct) {
      let userAnswer = prompt(`Question: ${questions[i]}`).toLowerCase();
      if (userAnswer === answers[i].toLowerCase()) {
        score += guesses;
        correct = true;
        alert("Correct!");
      } else {
        guesses--;
        if (guesses > 0) {
          alert(`Sorry wrong Answer. You have ${guesses} guesses left.`);
        } else {
          alert(`Sorry wrong answer. The Correct answer was ${answers[i]}.`);
        }
      }
    }
  }
  document.getElementById("score").innerText = `Yor Score Is ${score}`;
} 
