//Quiz questions
var questions = [  
  {
      title: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts',
  },
  {
    title: 'The condition in an if / else statement is enclosed within ____.',
    choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
    answer: 'parentheses',
  },
  {
    title: 'Arrays in JavaScript can be used to store ____.',
    choices: [
      'numbers and strings',
      'other arrays',
      'booleans',
      'all of the above',
    ],
    answer: 'all of the above',
  },
  {
    title:
      'String values must be enclosed within ____ when being assigned to variables.',
    choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
    answer: 'quotes',
  },
  {
    title:
      'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
    answer: 'console.log',
  }
  ]

var questionIndex = 0;
var secondsLeft = 59;
var score = 0;

//DOM Elements
var startScreenEl = document.getElementById("start-screen");
var startEl = document.getElementById("start-btn");
var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("question");
var choicesEl = document.getElementById("choices");
var feedbackEl = document.getElementById("feedback");

//Click event
startEl.addEventListener("click", startQuiz);

function startQuiz(){
  startEl.style.display = "none";
  startScreenEl.style.display = "none";

  questionIndex = 0;
  score = 0;
  showQuestion();
  endQuiz();
}

function showQuestion(){

    var currentQuestion = questions[questionIndex];
    questionEl.textContent = currentQuestion.title;
    choicesEl.innerHTML = "";
    feedbackEl.textContent = "";

    currentQuestion.choices.forEach(function (choice, index) {
      var listItemEl = document.createElement("li");
      var buttonEl = document.createElement("button");
      buttonEl.textContent = choice;
      buttonEl.addEventListener("click", function () {
        checkAnswer(index);
      });
      listItemEl.appendChild(buttonEl);
      choicesEl.appendChild(listItemEl);
    });
  }


// Countdown timer to end quiz
function endQuiz() {
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            displayMessage();
        }
    }, 1000);
}

