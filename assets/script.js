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

//DOM Elements
var startEl = document.getElementById("start-btn");
var timerEl = document.getElementById("timer");

//Click event
startEl.addEventListener("click", startQuiz);

function startQuiz(){
  startEl.style.display = "none";

  function showQuestion(){
    for (let i = 0; i < questions[questionIndex].choices.length; i++){
      const options = questions[questionIndex].choices[i];
      var optionsButton = document.createElement("button");
      optionsButton.textContent = options;
    }
    }
    
    showQuestion();

    endQuiz();

// console.log(questions[questionIndex].title);
// questionIndex = questionIndex +1;
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


// console.log(questions[1].title);
