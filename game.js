var questions1 = [
    ["In what country did the first Starbucks open outside of North America?", 2, "China", "UK", "Japan"],
    ["When was the internet invented?", 1, "1980", "1969", "1995"],
    ["When did Facebook first launch?", 2, "2003", "2005", "2004"]
];
var questions = [...questions1];
var questionCounter = 0;

function playGame() {
    if (questions.length > 0) {
        var currentQuestion = questions.shift();
        displayQuestion(currentQuestion);
        questionCounter++;
    } else {
        document.getElementById("prompt").innerHTML = '<button onclick="restartGame()">Restart Game</button>';
        document.getElementById("question").innerText = "";
        document.getElementById("answers").innerHTML = ""
    }
}

function displayQuestion(question) {
    document.getElementById("question").innerText = question[0];
    var answerList = '';
    for (var i = 2; i < question.length; i++) {
        answerList += `<li><button onclick="checkAnswer(${i-2}, ${question[1]})">${question[i]}</button></li>`;
    }
    document.getElementById("answers").innerHTML = answerList;
}

function checkAnswer(selectedIndex, correctIndex) {
    if (selectedIndex === correctIndex) {
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }
    playGame();
}

function restartGame() {
    questions = [...questions1]; 
    questionCounter = 0;
    playGame();
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("prompt").innerHTML = '<button onclick="playGame()">Start Game</button>';
});
