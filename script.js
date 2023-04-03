//=================

// ================= ARRAYS FOR QUESTIONS AND ANSWERS ===================== //
// ======================================================================== //
var questionTwo = [
  "The condition in an if / else statement is enclosed with ___________.",
];
var questionThree = ["3rd Q goes here"];
var questionFour = ["4th Q goes here"];
var questionFive = ["5th Q goes here"];
var questionSix = ["6th Q goes here"];
var questionSeven = ["7th Q goes here"];
var questionEight = ["8th Q goes here"];
var questionNine = ["9th Q goes here"];
var questionTen = ["10th Q goes here"];
var answerTwo = ["two", "curly brackets", "parentheses", "square brackets"];
var answerThree = ["three", "curly brackets", "parentheses", "square brackets"];
var answerFour = ["four", "curly brackets", "parentheses", "square brackets"];
var answerFive = ["five", "curly brackets", "parentheses", "square brackets"];
var answerSix = ["six", "curly brackets", "parentheses", "square brackets"];
var answerSeven = ["seven", "curly brackets", "parentheses", "square brackets"];
var answerEight = ["eight", "curly brackets", "parentheses", "square brackets"];
var answerNine = ["nine", "curly brackets", "parentheses", "square brackets"];
var answerTen = ["ten", "curly brackets", "parentheses", "square brackets"];
var quizQuestionBank = [
  questionTwo,
  questionThree,
  questionFour,
  questionFive,
  questionSix,
  questionSeven,
  questionEight,
  questionNine,
  questionTen,
];
var answerBank = [
  answerTwo,
  answerThree,
  answerFour,
  answerFive,
  answerSix,
  answerSeven,
  answerEight,
  answerNine,
  answerTen,
];

var highScores = [];
var int = null;
var seconds = 75;

var quizCountdown = document.querySelector(".quiz-countdown");
var startTimer = document.querySelector("#start-quiz");
var beforeQuizContent = document.querySelector(".before-quiz-content");
var quizCardContent = document.querySelector(".quiz-card-content");
var quizCardQuestion = document.querySelector("h1");
var clickToGetFeedback = document.querySelector(".options");
startTimer.addEventListener("click", startQuiz);
// clickToGetFeedback.addEventLIstener("click", continueQuiz);

// ==================================================================== //
//            -------------------CODE BELOW------------------
// ==================================================================== //

function startQuiz() {
  //we need the intro stuff to go away
  beforeQuizContent.style.display = "none";
  quizCardContent.style.display = "flex";

  //we need to start the timer
  quizCountdown.innerHTML = `Time: ${seconds}`;
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayCountdown, 1000);
}

function displayCountdown() {
  // we show the timer to count
  // down every second.
  seconds--;
  quizCountdown.innerHTML = `Time: ${seconds}`;
}

function continueQuiz() {
  // loop through all the questions
  console.log("going to the next question");
}

function checkAnswer() {
  // display real time feedback
  // take ten seconds off of timer
}

function enterHighScores() {
  // after quiz ends
  // user enters high scores
}
