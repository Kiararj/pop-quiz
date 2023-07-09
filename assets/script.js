// Countdown timer to end quiz
var timerEl = document.querySelector(".time");

var secondsLeft = 60;

function endQuiz() {
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            finalScoreScreen();
        }
    }, 1000);
}

endQuiz();