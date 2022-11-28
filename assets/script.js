var startButton = document.querySelector('#start-quiz');
var quizChallengeH1 = document.querySelector('#quiz-challenge-h1');
var loadUpContent = document.getElementById('load-up-content');
var scoresButton = document.getElementById('scores-button');
var backButton = document.getElementById('back-button');

var clock = document.querySelector('.clock');
var timeLeft = 71;

var correct = document.getElementById('correct');
var inCorrect = document.getElementById('incorrect');

var endScreen = document.getElementById('end-screen');
var allDone = document.getElementById('all-done');
var label = document.getElementById('label');
var score = document.getElementById('score');
var userName = document.getElementById('user-name');
var submit = document.getElementById('submit');
var scoresList = document.getElementById('scores-list');

var highListUL = document.querySelector('#highList');
var scores = [];

var first = document.getElementById('first-question');
var second = document.getElementById('second-question');
var third = document.getElementById('third-question');
var fourth = document.getElementById('fourth-question');
var fith = document.getElementById('fith-question');

var choice1A = document.getElementById('choice-1A');
var choice1B = document.getElementById('choice-1B');
var choice1C = document.getElementById('choice-1C');
var choice1D = document.getElementById('choice-1D');

var choice2A = document.getElementById('choice-2A');
var choice2B = document.getElementById('choice-2B');
var choice2C = document.getElementById('choice-2C');
var choice2D = document.getElementById('choice-2D');

var choice3A = document.getElementById('choice-3A');
var choice3B = document.getElementById('choice-3B');
var choice3C = document.getElementById('choice-3C');
var choice3D = document.getElementById('choice-3D');

var choice4A = document.getElementById('choice-4A');
var choice4B = document.getElementById('choice-4B');
var choice4C = document.getElementById('choice-4C');
var choice4D = document.getElementById('choice-4D');

var choice5A = document.getElementById('choice-5A');
var choice5B = document.getElementById('choice-5B');
var choice5C = document.getElementById('choice-5C');
var choice5D = document.getElementById('choice-5D');

window.onload = function() {
    first.style.display = 'none';
    second.style.display = 'none';
    third.style.display = 'none';
    fourth.style.display = 'none';
    fith.style.display = 'none';
    clock.style.display = 'none';
    allDone.style.display = 'none';
    score.style.display = 'none';
    userName.style.display = 'none';
    submit.style.display = 'none';
    label.style.display = 'none';
    backButton.style.display = 'none';
    scoresList.style.display = 'none';
    highListUL.style.display = 'none';
    return;
}

var countDown;

function timerCountDown() {

 countDown = window.setInterval(function() {
    timeLeft--;
    clock.textContent = timeLeft + ' seconds left';

    if (timeLeft === 0) {
        clearInterval(countDown);

        first.style.display = 'none';
        second.style.display = 'none';
        third.style.display = 'none';
        fourth.style.display = 'none';
        fith.style.display = 'none';

        endQuiz();

    }

    },1000);
    return countDown;
}

startButton.addEventListener('click', function() {
    
    timerCountDown();

    loadUpContent.style.display = 'none';
    scoresList.style.display = 'none';
    scoresButton.style.display = 'none';
    clock.style.display = 'block';

    if (first.style.display === 'none') {
        first.style.display = 'block';
    } 
});

function endQuiz() {
    clearInterval(countDown);
    correct.style.display = 'none';
    inCorrect.style.display = 'none';
    clock.style.display = 'none';
    first.style.display = 'none';
    
    allDone.style.display = 'block';
    score.style.display = 'block';
    userName.style.display = 'block';
    submit.style.display = 'block';
    label.style.display = 'block';
    backButton.style.display = 'block';
    scoresButton.style.display ='block';

    scoresList.style.display = 'none';
    highListUL.style.display = 'none';

    score.textContent = timeLeft  + ' is your final score';

};

function highScores() {

    highListUL.innerHTML = '';

    for (var i = 0; i < scores.length; i++) { 

        var score = scores[i];

        var li = document.createElement('li');

        li.textContent = ' ' + score;
        li.setAttribute("data-index", i);

        highListUL.appendChild(li);

  }
};

function GetHighScore() {

    var storedScore = JSON.parse(localStorage.getItem('scores'));
    
    if(storedScore !== null) {

        scores = storedScore;

    }

    highScores();
}

function storageScores() {

    localStorage.setItem('scores', JSON.stringify(scores));
console.log(scores);
}

scoresButton.addEventListener('click', function () {
    
    timeLeft = 71;
    
    loadUpContent.style.display = 'none';
    allDone.style.display = 'none';
    score.style.display = 'none';
    userName.style.display = 'none';
    submit.style.display = 'none';
    label.style.display = 'none';
    scoresButton.style.display = 'none';
    backButton.style.display = 'block';
    scoresList.style.display = 'block';
    highListUL.style.display = 'block';

});

backButton.addEventListener('click', function() {

    timeLeft = 71;
    
    backButton.style.display = 'none';
    highListUL.style.display = 'none';
    allDone.style.display = 'none';
    score.style.display = 'none';
    userName.style.display = 'none';
    submit.style.display = 'none';
    label.style.display = 'none';
    scoresList.style.display = 'none';
    scoresButton.style.display = 'block';
    loadUpContent.style.display = 'block';

});

submit.addEventListener('click', function(set) {
    set.preventDefault();

    allDone.style.display = 'none';
    score.style.display = 'none';
    userName.style.display = 'none';
    submit.style.display = 'none';
    label.style.display = 'none';
    scoresButton.style.display = 'none';
    scoresList.style.display = 'block';
    highListUL.style.display = 'block';

    var userInput = userName.value.trim()

    if (userInput === '') {
        return;
    }

    scores.push(userInput + ' ' + timeLeft);
    userName.value = '';

    storageScores();
    highScores();

});

GetHighScore();


[choice1A, choice1B, choice1C, choice1D].forEach(function(event) {

         event.addEventListener('click', function() {

        first.style.display = 'none';
        second.style.display = 'block';

        if (event.id === 'choice-1A') {
            correct.textContent = 'Correct!';
        } else {
            inCorrect.textContent = 'Incorrect.';
            timeLeft -= 10;
        }
    });
});

[choice2A, choice2B, choice2C, choice2D].forEach(function(event) {

    event.addEventListener('click', function() {

        second.style.display = 'none';
        third.style.display = 'block';
        
        if (event.id === 'choice-2D') {
            correct.textContent = 'Correct!';
            inCorrect.textContent = '';
        } else {
            inCorrect.textContent = 'Incorrect.';
            correct.textContent = '';
            timeLeft -= 10;
        }

    });
});

[choice3A, choice3B, choice3C, choice3D].forEach(function(event) {

    event.addEventListener('click', function() {

        third.style.display = 'none';
        fourth.style.display = 'block';
        
        if (event.id === 'choice-3D') {
            correct.textContent = 'Correct!';
            inCorrect.textContent = '';
        } else {
            inCorrect.textContent = 'Incorrect.';
            correct.textContent = '';
            timeLeft -= 10;
        }

    });
});

[choice4A, choice4B, choice4C, choice4D].forEach(function(event) {

    event.addEventListener('click', function() {

        fourth.style.display = 'none';
        fith.style.display = 'block'; 
        
        if (event.id === 'choice-4C') {
            correct.textContent = 'Correct!';
            inCorrect.textContent = '';
        } else {
            inCorrect.textContent = 'Incorrect.';
            correct.textContent = '';
            timeLeft -= 10;
        }

    });
});

[choice5A, choice5B, choice5C, choice5D].forEach(function(event) {

    event.addEventListener('click', function() {

        fith.style.display = 'none';
        
        if (event.id === 'choice-5C') {
            correct.textContent = 'Correct!';
            inCorrect.textContent = '';
            endQuiz();
        } else {
            inCorrect.textContent = 'Incorrect.';
            correct.textContent = '';
            timeLeft -= 10;
            endQuiz();
        }

    });
});



