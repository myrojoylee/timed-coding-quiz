//=================

// ================= OBJECTS FOR QUESTIONS AND ANSWERS ==================== //
// ======================================================================== //

const quizQuestionOne = {
  question: "Commonly used data types DO NOT include:",
  answer: "alerts",
  options: ["strings", "booleans", "alerts", "numbers"],
};

const quizQuestionTwo = {
  question:
    "The condition in an if/else statement is enclosed within ____________.",
  answer: "parentheses",
  options: ["quotes", "parentheses", "curly brackets", "square brackets"],
};

const quizQuestionThree = {
  question: "If x = [9, 2, 3, 4], what should the output of x.slice(0,2) be?",
  answer: "[9, 2]",
  options: ["[9, 3]", "[9, 2, 3]", "[9, 2, 4]", "[9, 2]"],
};
const quizQuestionFour = {
  question: `Accessing a variable x returns as 'not defined'. The variable could be:`,
  answer: "out of scope",
  options: ["in scope", "out of scope", "in sync", "out of sync"],
};

const quizQuestionFive = {
  question: "Flexbox is a model used for ",
  answer: "layout",
  options: ["layout", "DOM manipulation", "hex codes", "ES 6 algorithms"],
};

const quizQuestionSix = {
  question: "What command do we use to stage our files?",
  answer: "git add",
  options: ["git stage", "git commit", "git add", "git push"],
};

const quizQuestionSeven = {
  question: "Visual Studio Code is an example of a ",
  answer: "code editor",
  options: [
    "word processor",
    "version control system",
    "remote debugger",
    "code editor",
  ],
};

const quizQuestionEight = {
  question: "'9' === 9 when typed in the console should return",
  answer: "false",
  options: ["true", "false", "undefined", "null"],
};

const quizQuestionNine = {
  question: "addEventListener() is a type of ____________.",
  answer: "method",
  options: ["method", "framework", "party", "pseudo-class"],
};

const quizQuestionTen = {
  question: "____ notation is a common way to access element in JavaScript.",
  answer: "dot",
  options: ["string", "quote", "dot", "comma"],
};

const quizBank = [
  quizQuestionOne,
  quizQuestionTwo,
  quizQuestionThree,
  quizQuestionFour,
  quizQuestionFive,
  quizQuestionSix,
  quizQuestionSeven,
  quizQuestionEight,
  quizQuestionNine,
  quizQuestionTen,
];

let highScores = [];
let int = null;
let seconds = 75;
let count = 1;
let quizInterval;
let currentAnswer = quizBank[0].answer;

const quizCountdown = document.querySelector(".quiz-countdown");
const startTimer = document.querySelector("#start-quiz");
const beforeQuizContent = document.querySelector(".before-quiz-content");
const quizCardContent = document.querySelector(".quiz-card-content");
const quizCardQuestion = document.querySelector(".quiz-card-question");
const quizComplete = document.querySelector(".quiz-complete");
// var answerOption = document.querySelectorAll("button");
const answerFeedback = document.querySelectorAll(".options");

// clickToGetFeedback.addEventLIstener("click", continueQuiz);
const rightAnswer = document.querySelector(".right-answer");
const wrongAnswer = document.querySelector(".wrong-answer");
const textAnswer = document.querySelectorAll(".answer");
// submit button
let userHighScore = "";
const submitScore = document.querySelector(".submit-high-score");
const seeHighScore = document.querySelector(".see-high-scores");
const highScoreMessage = document.querySelector(".high-score-message");
const goBack = document.querySelector(".go-back");
const clearHighScore = document.querySelector(".clear");

// ==================================================================== //
//            -------------------CODE BELOW------------------
// ==================================================================== //
// quiz begins when 'start quiz' is clicked:
startTimer.addEventListener("click", startQuiz);

function startQuiz() {
  // we need the intro stuff to go away
  beforeQuizContent.style.display = "none";
  quizCardContent.style.display = "flex";

  // adding event listeners to all answer options
  for (let i = 0; i < answerFeedback.length; i++) {
    answerFeedback[i].addEventListener("click", rightOrWrong);
  }

  //we need to start the timer
  quizCountdown.innerHTML = `Time: ${seconds}`;
  quizInterval = setInterval(function () {
    if (seconds > 0) {
      seconds--;
      quizCountdown.innerHTML = `Time: ${seconds}`;
    } else {
      clearInterval(quizInterval);
      quizCountdown.innerHTML = `Time: 0`;
      endGame();
    }
  }, 1000);
}

// give user feedback after they
// choose answer
function rightOrWrong(e) {
  if (e.currentTarget.children[1].textContent === currentAnswer) {
    rightAnswer.style.display = "block";
    wrongAnswer.style.display = "none";
  } else {
    rightAnswer.style.display = "none";
    wrongAnswer.style.display = "block";
    seconds = seconds - 10;
  }
  // go to next Q after 500ms
  setTimeout(() => {
    continueQuiz();
  }, 500);
}

function continueQuiz() {
  // loop through all the questions
  // replace values with
  // question/answer bank
  rightAnswer.style.display = "none";
  wrongAnswer.style.display = "none";
  console.log("here?");
  if (seconds > 0) {
    for (let i = 1; i < quizBank.length; i++) {
      console.log("hi");
      quizCardQuestion.innerHTML = quizBank[i].question;
      let x = quizBank[i];
      for (let i = 0; i < x.options.length; i++) {
        textAnswer[i].innerHTML = x.options[i];
      }
      currentAnswer = quizBank[i].answer;
      rightOrWrong();
    }
  } else {
    endGame();
  }
}

function endGame() {
  // game ends
  quizCardContent.style.display = "none";
  quizComplete.style.display = "flex";
  submitScore.addEventListener("click", endScreen);
  goBack.addEventListener("click", function () {
    location.reload();
  });
}

function endScreen() {
  // we set the high scores in a list
  userHighScore = document.querySelector("#initials").value;
  highScores.push(userHighScore);
  highScoreMessage.innerHTML = highScores[0];
  seeHighScore.style.display = "flex";
  quizComplete.style.display = "none";
}

// need to implement local storage
function whatDoWeDoHere() {
  console.log(`don't know`);
}
