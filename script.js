//=================

var questionTwo = [
  "The condition in an if / else statement is enclosed with ___________.",
];
var answerTwo = ["quotes", "curly brackets", "parentheses", "square brackets"];
var quizQuestionBank = [];
var answerBank = [];

var nextQuestion = document.querySelector("#start-quiz");
var beforeQuizContent = document.querySelector(".before-quiz-content");
var quizCardContent = document.querySelector(".quiz-card-content");
nextQuestion.addEventListener("click", startQuiz);

function startQuiz() {
  //we need the intro stuff to go away
  beforeQuizContent.style.display = "none";
  quizCardContent.style.display = "flex";

  //we need to start the timer
  console.log("is the timer starting?!?");
}

function buildTimer() {
  // we build timer
}
