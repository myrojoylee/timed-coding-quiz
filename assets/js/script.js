// ======================================================================== //
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
  question: "Visual Studio Code is an example of a ___________.",
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

// variables for high scores object to prepare for local storage
let highScores = [];
let playerName, playerScore;
let userHighScore = "Anonymous";
let accessHighScores;

// variables to help loop through question bank, keep time, and score
let seconds = 75;
let currentScore = 0;
let count = 0;
let quizInterval;
let currentAnswer = quizBank[0].answer;
let temp;

// ======================= QUERY SELECTOR VARIABLES ======================= //
// ======================================================================== //

const quizCountdown = document.querySelector(".quiz-countdown");
const updatedScore = document.querySelector(".current-score");
const startTimer = document.querySelector("#start-quiz");
const beforeQuizContent = document.querySelector(".before-quiz-content");
const quizCardContent = document.querySelector(".quiz-card-content");
const quizCardQuestion = document.querySelector(".quiz-card-question");
const quizComplete = document.querySelector(".quiz-complete");

const answerFeedback = document.querySelectorAll(".options");

const rightAnswer = document.querySelector(".right-answer");
const wrongAnswer = document.querySelector(".wrong-answer");
const textAnswer = document.querySelectorAll(".answer");

// submit button
const submitScore = document.querySelector(".submit-high-score");
const seeHighScore = document.querySelector(".see-high-scores");
const highScoreMessage = document.querySelector(".high-score-message");
const highScoreTitle = document.querySelector(".high-score-title");
const finalScore = document.querySelector(".final-score");
const goBack = document.querySelector(".go-back");
const clearHighScore = document.querySelector(".clear");
const viewHighScores = document.querySelector(".view-high-scores");

// ==================================================================== //
//            -------------------CODE BELOW------------------
// ==================================================================== //

// allows user to view high scores before playing
viewHighScores.addEventListener("click", viewHighScoresBeforeGame);
goBack.addEventListener("click", function () {
  location.reload();
});
clearHighScore.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

function viewHighScoresBeforeGame() {
  beforeQuizContent.style.display = "none";
  seeHighScore.style.display = "flex";
  quizComplete.style.display = "none";

  // this prevents the items from duplicating
  // if the 'view high scores' button is pressed
  // multiple times in succession
  if (localStorage.length != 0) {
    highScores = JSON.parse(localStorage.getItem("high score array"));
    displayHighScores();
  }
}

// =-=-=-=-=-=-=- QUIZ BEGINS HERE -=-=-=-=-=-=-= //
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- //

// quiz begins when 'start quiz' is clicked:
startTimer.addEventListener("click", startQuiz);

function startQuiz() {
  // disables the viewing of high scores while playing
  viewHighScores.removeEventListener("click", viewHighScoresBeforeGame);
  // replace intro content with quiz questions
  beforeQuizContent.style.display = "none";
  quizCardContent.style.display = "flex";

  // add event listener to all answer option buttons
  for (let i = 0; i < answerFeedback.length; i++) {
    answerFeedback[i].addEventListener("click", rightOrWrong);
  }

  // start countdown
  quizCountdown.textContent = `Time: ${seconds}`;

  quizInterval = setInterval(function () {
    if (seconds > 0) {
      seconds--;
      quizCountdown.textContent = `Time: ${seconds}`;
    } else {
      clearInterval(quizInterval);
      quizCountdown.textContent = `Time: 0`;
      endQuiz();
    }
  }, 1000);
}

// give user real-time feedback
function rightOrWrong(e) {
  // access and modify the second span of the button
  let x = e.currentTarget.children[1].textContent;

  if (x === currentAnswer) {
    currentScore += 20;
    updatedScore.textContent = `Score: ${currentScore}`;
    rightAnswer.style.display = "block";
    wrongAnswer.style.display = "none";
  } else {
    if (currentScore >= 20) {
      currentScore -= 10;
      updatedScore.textContent = `Score: ${currentScore}`;
    } else {
      currentScore = 0;
    }
    rightAnswer.style.display = "none";
    wrongAnswer.style.display = "block";
    seconds = seconds - 10;
  }

  // go to next question after 500ms
  setTimeout(() => {
    count++;
    continueQuiz();
  }, 750);
}

function continueQuiz() {
  // loop through all the questions in question bank
  rightAnswer.style.display = "none";
  wrongAnswer.style.display = "none";

  if (seconds > 0 && count < 10) {
    for (let i = 1; i < quizBank.length; i++) {
      if (count === i) {
        quizCardQuestion.textContent = quizBank[i].question;
        let x = quizBank[i];
        for (let i = 0; i < x.options.length; i++) {
          textAnswer[i].textContent = x.options[i];
        }
        currentAnswer = quizBank[i].answer;
      }
    }
  } else {
    // high score is score plus remaining time
    currentScore = currentScore + seconds;
    if (currentScore < 0) {
      // if score is negative, it defaults to 0
      currentScore = 0;
    }
    updatedScore.textContent = `Score: ${currentScore}`;
    // once quiz is done, timer goes to 0
    seconds = 0;
    endQuiz();
  }
}

function endQuiz() {
  // quiz ends
  quizCardContent.style.display = "none";
  quizComplete.style.display = "flex";
  finalScore.textContent = `${currentScore}!`;

  submitScore.addEventListener("click", endScreen);
}

// =-=-=-=-=- DATA HANDLING BEGINS HERE -=-=-=-=- //
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- //

function endScreen() {
  // we set the high scores in a list
  userHighScore = document.querySelector("#initials").value;
  playerName = userHighScore;
  if (currentScore > 0) {
    playerScore = currentScore;
  } else {
    playerScore = 0;
  }
  if (userHighScore === "") {
    playerName = "Anonymous";
  } else {
    playerName = userHighScore;
  }
  temp = { name: playerName, score: currentScore };

  // if storage is empty, set it
  if (localStorage.getItem("high score array") === null) {
    highScores.push(temp);
    localStorage.setItem("high score array", JSON.stringify(highScores));
  }
  // if storage is not empty, get string, parse, update array, then set again
  else {
    highScores = JSON.parse(localStorage.getItem("high score array"));
    highScores.push(temp);
    localStorage.setItem("high score array", JSON.stringify(highScores));
  }

  displayHighScores();
}

function displayHighScores() {
  seeHighScore.style.display = "flex";
  quizComplete.style.display = "none";

  // create elements and append
  let z = document.querySelector(".see-high-scores").childElementCount;
  if (z <= 2) {
    sortScores(highScores);
    let y = highScores.reverse();
    for (let i = 0; i < highScores.length; i++) {
      let x = document.createElement("p");
      x.textContent = `${highScores[i].name}: ${highScores[i].score}`;
      seeHighScore.insertBefore(x, highScoreTitle.nextSibling);
      x.style.backgroundColor = "#d9d3e9";
      x.style.fontSize = "0.75em";
      x.style.padding = "0.25em";
    }
  }
  viewHighScores.addEventListener("click", viewHighScoresBeforeGame);
}

function sortScores(object) {
  // scores will display from highest to lowest
  for (let i = 1; i < object.length; i++) {
    let key = object[i];
    let j = i - 1;

    while (j >= 0 && key.score > object[j].score) {
      object[j + 1] = object[j];
      j = j - 1;
    }
    object[j + 1] = key;
  }

  return object;
}
