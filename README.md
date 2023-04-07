# <TIMED CODING QUIZ>

## Description

The purpose of this challenge was to give us an introduction to Web APIs through the creation of a timed coding quiz. The user is presented with a series of questions after starting the quiz and is timed from beginning to end. A simple scoring system rewards the user with points for correct answers and penalizes them with subtracting time and points for incorrect answers. The quiz ends when the user has run of time or completed the quiz, whichever comes first. At this point, they can enter their initials to save their high score and are able to access this again later or clear it.

First, the website's base content was created in HTML and a responsive layout was styled in CSS. A question bank was created utilizing our knowledge of arrays and variables were declared to access the DOM. Further familiarization with DOM traversal was made possible by using methods such as querySelector(). Implementing setInterval() and clearInterval() allowed the use of a timer during the entire quiz. Applying createElement() further shows the interactive nature of JavaScript as users saw new high scores populate after each separate quiz session. localStorage was utilized as a final step to store high scores to demonstrate the concept of persistent storage.

## Usage

Demo:
<img src="https://github.com/myrojoylee/timed-coding-quiz/blob/main/assets/images/coding-quiz-sequence.gif" width = "700" />

[Click here for live demo](https://myrojoylee.github.io/timed-coding-quiz/)

## Credits/Sources

A thank you to [Matthew Houston](https://github.com/houstonmp) who helped me understand the concepts of Event.target and Event.currentTarget in order to traverse the DOM correctly.

The insertion sort algorithm to sort high scores was adapted from [HERE](https://www.codingninjas.com/codestudio/library/sort-an-array-with-and-without-inbuilt-methods).

## License

Refer to the license in the repository.
