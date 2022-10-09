var startButton = document.querySelector('#start-quiz');
var quizChallengeH1 = document.querySelector('#quiz-challenge-h1');
var loadUpContent = document.getElementById('load-up-content');

var first = document.getElementById('first-question');
var second = document.getElementById('second-question');
var third = document.getElementById('third-question');
var fourth = document.getElementById('fourth-question');
var fith = document.getElementById('fith-question');

var choice1A = document.getElementById('choice-1A');

window.onload = function() {
    first.style.display = 'none';
    second.style.display = 'none';
    third.style.display = 'none';
    fourth.style.display = 'none';
    fith.style.display = 'none';
    return;
}

startButton.addEventListener('click', function() {
    
    loadUpContent.style.display = 'none';

    if (first.style.display === 'none') {
        first.style.display = 'block';
    } 
});

choice1A.addEventListener('click', function() {

    first.style.display = 'none';
    second.style.display = 'block';
    third.style.display = 'none';
    fourth.style.display = 'none';
    fith.style.display = 'none';
});


