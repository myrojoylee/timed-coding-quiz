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
var optionTwo = ["two", "curly brackets", "parentheses", "square brackets"];
var optionThree = ["three", "curly brackets", "parentheses", "square brackets"];
var optionFour = ["four", "curly brackets", "parentheses", "square brackets"];
var optionFive = ["five", "curly brackets", "parentheses", "square brackets"];
var optionSix = ["six", "curly brackets", "parentheses", "square brackets"];
var optionSeven = ["seven", "curly brackets", "parentheses", "square brackets"];
var optionEight = ["eight", "curly brackets", "parentheses", "square brackets"];
var optionNine = ["nine", "curly brackets", "parentheses", "square brackets"];
var optionTen = ["ten", "curly brackets", "parentheses", "square brackets"];
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
var optionBank = [
  optionTwo,
  optionThree,
  optionFour,
  optionFive,
  optionSix,
  optionSeven,
  optionEight,
  optionNine,
  optionTen,
];

const quizQuestionOne = {
  question: "1st Q goes here",
  answer: "alerts",
};

const quizQuestionTo = {
  question: "2nd Q goes here",
  answer: "",
};

const quizBank = [quizQuestionOne];

var highScores = [];
var int = null;
var seconds = 75;

var quizCountdown = document.querySelector(".quiz-countdown");
var startTimer = document.querySelector("#start-quiz");
var beforeQuizContent = document.querySelector(".before-quiz-content");
var quizCardContent = document.querySelector(".quiz-card-content");
var quizCardQuestion = document.querySelector(".quiz-card-question");
var quizComplete = document.querySelector(".quiz-complete");
// var answerOption = document.querySelectorAll("button");
var answerFeedback = document.querySelectorAll(".options");
startTimer.addEventListener("click", startQuiz);
// clickToGetFeedback.addEventLIstener("click", continueQuiz);
var rightAnswer = document.querySelector(".right-answer");
var wrongAnswer = document.querySelector(".wrong-answer");
// submit button
var userHighScore = "";
var submitScore = document.querySelector(".submit-high-score");
var seeHighScore = document.querySelector(".see-high-scores");
var highScoreMessage = document.querySelector(".high-score-message");
var goBack = document.querySelector(".go-back");
var clearHighScore = document.querySelector(".clear");

// ==================================================================== //
//            -------------------CODE BELOW------------------
// ==================================================================== //

function startQuiz() {
  // we need the intro stuff to go away
  beforeQuizContent.style.display = "none";
  quizCardContent.style.display = "flex";

  // adding event listeners to all answer options
  for (var i = 0; i < answerFeedback.length; i++) {
    answerFeedback[i].addEventListener("click", rightOrWrong);
  }

  //we need to start the timer
  quizCountdown.innerHTML = `Time: ${seconds}`;
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayCountdown, 1000);
}

// give user feedback after they
// choose answer
function rightOrWrong(e) {
  if (e.currentTarget.children[1].textContent === quizBank[0].answer) {
    rightAnswer.style.display = "block";
    wrongAnswer.style.display = "none";
  } else {
    rightAnswer.style.display = "none";
    wrongAnswer.style.display = "block";
    seconds = seconds - 10;
  }
}

// we show the timer to count
// down every second.

function displayCountdown() {
  if (seconds > 0) {
    seconds--;
    quizCountdown.innerHTML = `Time: ${seconds}`;
  } else {
    clearInterval(int);
    quizCountdown.innerHTML = `Time: 0`;
    endGame();
  }
}

function continueQuiz() {
  // loop through all the questions
  console.log("going to the next question");
}

function endGame() {
  // game ends
  quizCardContent.style.display = "none";
  quizComplete.style.display = "flex";
  submitScore.addEventListener("click", endScreen);
}

function endScreen() {
  // we set the high scores in a list
  userHighScore = document.querySelector("#initials").value;
  highScores.push(userHighScore);
  highScoreMessage.innerHTML = highScores[0];
  seeHighScore.style.display = "flex";
  quizComplete.style.display = "none";
}

function whatDoWeDoHere() {
  console.log(`don't know`);
}
