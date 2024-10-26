/* Question Multi-dimensional array */
var questions = [
   ["In what country did the first Starbucks open outside of North America?", [3], "China", "UK", "Japan"],
   ["When was the internet invented?", [1], "1980", "1969", "1995"],
   ["When did Facebook first launch?", [2], "2003", "2005", "2004"]
];
var questionCounter = 0;

function startGame() {
  if(questions.length > 0) {
    var currentQuestion = questions.shift();
    displayQuestion(currentQuestion);
    questionCounter++;
  } else {
    document.getElementById("prompt").innerHTML = `<button
  }    
}  
function displayQuestion(question) {
  document.getElementById("question").innerText = currentQuestion[0];

  var answerList = '';
  for (var i = 2; i < question.length; i++) {
    answersList += 
    
  
